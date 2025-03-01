import { NextResponse } from "next/server";
import { saveTeacherProfessionalInfo } from "@/lib/db/queries";

export async function POST(request: Request) {
  const {
    userId,
    highestQualification,
    yearsOfExperience,
    primarySubject,
    introduction,
  } = await request.json();

  try {
    const result = await saveTeacherProfessionalInfo({
      userId,
      highestQualification,
      yearsOfExperience,
      primarySubject,
      introduction,
    });
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to update professional info", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
