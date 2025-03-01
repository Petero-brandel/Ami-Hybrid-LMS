import { NextResponse } from "next/server";
import { saveTeacherDocuments } from "@/lib/db/queries";

export async function POST(request: Request) {
  const { userId, resume, certificates, governmentId, profilePhoto } =
    await request.json();

  try {
    await saveTeacherDocuments({
      userId,
      resume,
      certificates,
      governmentId,
      profilePhoto,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update documents", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
