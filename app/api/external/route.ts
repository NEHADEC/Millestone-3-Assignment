import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_API_URL);

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch data from the API" },
        { status: response.status }
      );
    }
    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message; // Agar error `Error` type ka hai
    }

    return NextResponse.json({
      success: false,
      message: "An error occurred.",
      error: errorMessage,
    });
  }
}
