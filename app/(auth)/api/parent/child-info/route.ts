import { NextResponse } from "next/server";
import { saveParentPersonalInfo } from "@/lib/db/queries";
import { auth } from "@/app/(auth)/auth";

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return new Response("Unauthorized", { status: 401 });
    }
    const userId = session.user.id;
    const { firstName, lastName, email, phoneNumber, state } =
      await request.json();

    console.log({ firstName, lastName, email, phoneNumber, state });

    const result = { result: "result" };
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Failed to update personal info", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
