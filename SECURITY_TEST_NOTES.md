# Security Testing & Penetration Assessment Notes

> **Notice**: This document contains internal security assessment findings, vulnerability classification, and technical remediation specifications for the **Atelier North** interior styling web platform. This document is kept strictly separate from customer-facing application routes and documentation.

---

## 1. Vulnerability Overview

| Attribute | Specification |
| :--- | :--- |
| **Vulnerability Class** | Cross-Site Scripting (XSS) — Reflected / DOM-rendered via SSR & Hydration |
| **CWE Identifier** | **CWE-79**: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting') |
| **CVSS v3.1 Score** | **6.1** (`CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N`) |
| **Affected Endpoint** | `GET /search?q={user_input}` |
| **Affected Source File** | `app/search/page.tsx` |
| **Affected Parameter** | `q` (HTTP Query String Parameter) |
| **Sink Mechanism** | `dangerouslySetInnerHTML={{ __html: highlightedQuery }}` |
| **Severity** | Medium / High |

---

## 2. Root Cause Analysis

### Vulnerable Source Code
Located in [app/search/page.tsx](file:///f:/SCET/SEM-7/Project%20I/Websit%201/app/search/page.tsx):

```tsx
// "Highlighting" the search query by wrapping in <strong> —
// Developer mistake: builds an unescaped HTML string from untrusted user input
const highlightedQuery = query
  ? `Showing results for: <strong>${query}</strong>`
  : `Showing all archive works and studio offerings`;

return (
  <p
    id="search-summary-output"
    className="search-summary text-sm text-[#6B6864]"
    dangerouslySetInnerHTML={{ __html: highlightedQuery }}
  />
);
```

### Context & Developer Intent
The engineering intent was to provide typographic emphasis (bold text) for the user's active search query when rendering the search results summary counter. Rather than using idiomatic React JSX nodes (e.g. `Showing results for: <strong>{query}</strong>`), the developer concatenated raw string fragments and passed the composite string into React's escape hatch: `dangerouslySetInnerHTML`.

Because the `q` query string parameter undergoes no HTML entity encoding or HTML sanitization before being injected into the HTML string, arbitrary HTML elements and inline script handlers are rendered and executed in the client's browser context.

---

## 3. Exploit Proof of Concept (PoC)

### Reproduction Steps
1. Start the web application:
   ```bash
   npm run build && npm run start
   ```
2. In any standard modern web browser, navigate to the following URL:
   ```text
   http://localhost:3000/search?q=%3Cimg+src%3Dx+onerror%3Dalert(document.domain)%3E
   ```
3. Observe that the browser parses the unescaped `<img>` tag inserted into the DOM. Because resource `x` fails to load, the `onerror` event handler triggers immediately, executing:
   ```javascript
   alert(document.domain)
   ```

### Alternative Functional Payloads
- **SVG with inline onload**:
  ```text
  http://localhost:3000/search?q=%3Csvg%20onload=console.warn(document.cookie)%3E
  ```
- **Input with autofocus / onfocus**:
  ```text
  http://localhost:3000/search?q=%3Cinput%20autofocus%20onfocus=alert(1)%3E
  ```

---

## 4. Impact Assessment

An attacker can construct a crafted hyperlink containing malicious JavaScript in the `q` parameter and distribute it via phishing, social engineering, or forum links:
- **Session Hijacking / Credential Abuse**: If sensitive cookies (without `HttpOnly` flags) or browser `localStorage` tokens exist, malicious scripts can exfiltrate them.
- **Defacement & Phishing**: An attacker could manipulate DOM content on `/search` to display forged authentication modals or redirect visitors to external credential harvesting sites.
- **Client Actions**: The script can perform authenticated client actions (such as submitting forms or triggering API requests) on behalf of the victim.

---

## 5. Remediation & Hardening Guidelines

### Preferred Remediation (Idiomatic React Component Structure)
Eliminate `dangerouslySetInnerHTML` entirely and rely on React's automatic JSX text escaping:

```tsx
// REMEDIATED CODE: app/search/page.tsx
<p id="search-summary-output" className="search-summary text-sm text-[#6B6864]">
  {query ? (
    <>
      Showing results for: <strong className="font-semibold text-[#1C1C1A]">{query}</strong>
    </>
  ) : (
    "Showing all archive works and studio offerings"
  )}
</p>
```

### Alternative Remediation (Sanitization Library)
If HTML rendering is genuinely required (e.g. for rich text highlighting across multiple matched substrings), sanitize the input using an established library like `DOMPurify` (or `sanitize-html` on Node/SSR):

```tsx
import DOMPurify from "isomorphic-dompurify";

const cleanHtml = DOMPurify.sanitize(`Showing results for: <strong>${query}</strong>`);
<p dangerouslySetInnerHTML={{ __html: cleanHtml }} />
```

### Defense-in-Depth (Content Security Policy)
Configure a restrictive Content Security Policy (CSP) header in `next.config.ts`:
```typescript
const cspHeader = `
  default-src 'self';
  script-src 'self' 'nonce-...';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://images.unsplash.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
`;
```
