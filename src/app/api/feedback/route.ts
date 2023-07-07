import { NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const data: Feedback = await request.json();

  console.log(data);

  return NextResponse.json({
    name: data.name,
    email: data.email,
    message: data.message,
  });
}
