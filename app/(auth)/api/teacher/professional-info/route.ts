import { NextResponse } from "next/server";
import { saveTeacherProfessionalInfo } from "@/lib/db/queries";
import { auth } from "@/app/(auth)/auth";

export async function POST(request: Request) {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    return new Response("Unauthorized", { status: 401 });
  }
  const userId = session.user.id;
  const {
    highestQualification,
    yearsOfExperience,
    primarySubjects,
    introduction,
  } = await request.json();

  console.log("incoming proffesinal info", {
    highestQualification,
    yearsOfExperience,
    primarySubjects,
    introduction,
  });
  try {
    const result = await saveTeacherProfessionalInfo({
      userId,
      highestQualification,
      yearsOfExperience,
      primarySubject: primarySubjects,
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
