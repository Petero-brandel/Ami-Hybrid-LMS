import { NextResponse } from "next/server";
import { saveTeacherDocuments } from "@/lib/db/queries";
import { auth } from "@/app/(auth)/auth";

export async function POST(request: Request) {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId = session.user.id;
  const { resume, certificates, governmentId, profilePhoto } =
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
