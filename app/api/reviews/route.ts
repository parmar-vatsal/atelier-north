import { NextResponse } from "next/server";
import { getReviews, addReview } from "@/data/store";

export async function GET() {
  const reviews = getReviews();
  return NextResponse.json({
    success: true,
    total: reviews.length,
    data: reviews
  });
}

// Stores raw user input without HTML sanitization (leading to Stored XSS)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.author || !body.comment) {
      return NextResponse.json(
        { success: false, error: "Author and review comment are required" },
        { status: 400 }
      );
    }

    const created = addReview({
      author: body.author,
      location: body.location || "Private Client",
      project: body.project || "Bespoke Styling",
      rating: Number(body.rating) || 5,
      comment: body.comment // Unsanitized HTML accepted and stored
    });

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial published",
        data: created
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}
