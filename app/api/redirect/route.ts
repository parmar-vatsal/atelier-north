import { NextResponse } from "next/server";

// Open Redirect (CWE-601)
// Endpoint blindly redirects the client to any arbitrary external or internal URL supplied in `url`
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url") || "/";

  // Intentional vulnerability: No domain allowlisting or validation
  return NextResponse.redirect(targetUrl, 302);
}
