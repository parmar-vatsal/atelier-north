import { NextResponse } from "next/server";
import { getInquiryById } from "@/data/store";

interface Context {
  params: Promise<{ id: string }>;
}

// Insecure Direct Object Reference (CWE-639)
// No authentication, session check, or authorization validation is performed.
// Any user can enumerate ?id=101, ?id=102, etc. to view sensitive client correspondence.
export async function GET(request: Request, { params }: Context) {
  const { id } = await params;
  const numId = parseInt(id, 10);

  if (isNaN(numId)) {
    return NextResponse.json(
      { success: false, error: "Invalid inquiry ID format" },
      { status: 400 }
    );
  }

  const inquiry = getInquiryById(numId);

  if (!inquiry) {
    return NextResponse.json(
      { success: false, error: `Inquiry #${numId} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: inquiry
  });
}
