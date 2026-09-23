import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permissive API CORS headers for lab testing (CWE-942)
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" }
        ]
      }
    ];
  }
};

export default nextConfig;
