# Security Testing & Penetration Assessment Notes

> **Notice**: This document contains internal security assessment findings, vulnerability classifications, and technical verification specifications for the **Atelier North** testing platform. This document is kept strictly separate from customer-facing application routes.

---

## Vulnerability Matrix

| # | Vulnerability Class | CWE | Severity | Endpoint / Surface | Mechanism |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **Reflected / DOM XSS** | [CWE-79](https://cwe.mitre.org/data/definitions/79.html) | Medium (6.1) | `GET /search?q={payload}` | `dangerouslySetInnerHTML={{ __html: query }}` |
| **2** | **Stored XSS** | [CWE-79](https://cwe.mitre.org/data/definitions/79.html) | High (7.2) | `GET /reviews` & `POST /api/reviews` | Unsanitized comment stored & rendered via `dangerouslySetInnerHTML` |
| **3** | **Insecure Direct Object Reference (IDOR)** | [CWE-639](https://cwe.mitre.org/data/definitions/639.html) | High (7.5) | `GET /api/inquiries/[id]` | Direct sequential integer lookup without session/auth check |
| **4** | **Sensitive Information Disclosure** | [CWE-200](https://cwe.mitre.org/data/definitions/200.html) | Medium (5.3) | `GET /api/debug` | Unauthenticated system diagnostics, Node version, memory & env |
| **5** | **Broken Access Control (Inquiry Dump)** | [CWE-200](https://cwe.mitre.org/data/definitions/200.html) | High (7.5) | `GET /api/inquiries` | Unauthenticated full dump of confidential client project inquiries |
| **6** | **Open Redirect** | [CWE-601](https://cwe.mitre.org/data/definitions/601.html) | Medium (6.1) | `GET /api/redirect?url={url}` | Blind 302 redirection without domain whitelist |
| **7** | **Permissive CORS** | [CWE-942](https://cwe.mitre.org/data/definitions/942.html) | Low/Med (4.3) | `ALL /api/*` | Wildcard `Access-Control-Allow-Origin: *` |

---

## 1. Reflected / DOM Cross-Site Scripting (XSS)

- **Target**: `GET /search?q={query}`
- **Source File**: `app/search/page.tsx`
- **Root Cause**: The search query term is wrapped inside `<strong>` via string concatenation and rendered using `dangerouslySetInnerHTML`.
- **Proof of Concept**:
  ```text
  http://localhost:3000/search?q=%3Cimg+src%3Dx+onerror%3Dalert(document.domain)%3E
  ```
- **Remediation**: Render the search term as standard React JSX children (`<strong>{query}</strong>`).

---

## 2. Stored Cross-Site Scripting (Stored XSS)

- **Target**: `GET /reviews` and `POST /api/reviews`
- **Source File**: `app/reviews/page.tsx` and `app/api/reviews/route.ts`
- **Root Cause**: The user-submitted testimonial comment is accepted via the API without HTML sanitization and subsequently rendered in the client testimonial stream using `dangerouslySetInnerHTML`.
- **Proof of Concept**:
  1. Navigate to `/reviews`.
  2. In the "Share Your Experience" form, submit:
     - Name: `Security Auditor`
     - Review: `<b onmouseover="alert('Stored-XSS')">Hover over this review text</b><img src=x onerror="console.warn('Stored XSS triggered')">`
  3. The payload is stored in the database/store and executes whenever any user visits `/reviews`.
- **Remediation**: Sanitize input on submission or render review comments safely using standard React text nodes.

---

## 3. Insecure Direct Object Reference (IDOR)

- **Target**: `GET /api/inquiries/[id]`
- **Source File**: `app/api/inquiries/[id]/route.ts`
- **Root Cause**: The route retrieves private consultation briefs using raw sequential integer IDs (`101`, `102`, `103`, etc.) with zero authorization or identity check.
- **Proof of Concept**:
  ```bash
  curl http://localhost:3000/api/inquiries/101
  curl http://localhost:3000/api/inquiries/102
  curl http://localhost:3000/api/inquiries/103
  ```
- **Response**: Exposes client names, phone numbers, private emails, budgets, and property narratives.
- **Remediation**: Implement session-based role checks and use cryptographically secure non-sequential identifiers (e.g., UUIDv4).

---

## 4. Sensitive Information Disclosure

- **Target**: `GET /api/debug`
- **Source File**: `app/api/debug/route.ts`
- **Root Cause**: Exposes server runtime telemetry (Node version, process memory, uptime, platform architecture, and environment metadata) to unauthenticated callers.
- **Proof of Concept**:
  ```bash
  curl http://localhost:3000/api/debug
  ```
- **Remediation**: Remove diagnostic routes from production builds or restrict them behind internal VPNs/API key authentication.

---

## 5. Unauthenticated Inquiries Dump

- **Target**: `GET /api/inquiries`
- **Source File**: `app/api/inquiries/route.ts`
- **Root Cause**: Missing authentication middleware; allows any visitor or automated scraper to retrieve all confidential client inquiries in a single JSON response.
- **Proof of Concept**:
  ```bash
  curl http://localhost:3000/api/inquiries
  ```

---

## 6. Open Redirect

- **Target**: `GET /api/redirect?url={url}`
- **Source File**: `app/api/redirect/route.ts`
- **Root Cause**: The redirect endpoint blindly reads the `url` query string parameter and issues an HTTP 302 redirect without validating the host or scheme.
- **Proof of Concept**:
  ```text
  http://localhost:3000/api/redirect?url=https://attacker-controlled-site.com
  ```
- **Remediation**: Enforce relative URL paths (e.g. must start with a single `/` and not `//`) or check against an approved domain whitelist.

---

## 7. Permissive Cross-Origin Resource Sharing (CORS)

- **Target**: All `/api/*` endpoints
- **Source File**: `next.config.ts`
- **Root Cause**: Wildcard header `Access-Control-Allow-Origin: *` configured across API routes.
- **Remediation**: Specify explicit trusted origins or restrict cross-origin access entirely if APIs are internal.
