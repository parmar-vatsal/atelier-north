import { NextResponse } from "next/server";
import { getInquiries, addInquiry } from "@/data/store";

// Intentionally unauthenticated endpoint (CWE-200 / Broken Access Control)
export async function GET() {
  const inquiries = getInquiries();
  return NextResponse.json({
    success: true,
    total: inquiries.length,
    data: inquiries
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const created = addInquiry({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone || "",
      projectType: body.projectType || "Residential Styling",
      location: body.location || "Unspecified",
      approxBudget: body.approxBudget || "₹25L – ₹50L",
      message: body.message
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry recorded successfully",
        inquiryId: created.id,
        data: created
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }
}
