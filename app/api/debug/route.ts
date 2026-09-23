import { NextResponse } from "next/server";

// Sensitive Information Disclosure (CWE-200)
// Exposes internal server architecture, Node version, environment variables, and build metadata
export async function GET(request: Request) {
  const headersObj: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headersObj[key] = value;
  });

  return NextResponse.json({
    status: "online",
    timestamp: new Date().toISOString(),
    system: {
      platform: process.platform,
      arch: process.arch,
      nodeVersion: process.version,
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage()
    },
    environment: {
      NODE_ENV: process.env.NODE_ENV || "development",
      PORT: process.env.PORT || "3000",
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    },
    clientHeaders: headersObj,
    debugMode: true,
    warning: "Internal diagnostic endpoint. Access should be restricted to studio DevOps."
  });
}
