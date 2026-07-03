import { Developer } from "@/types/developers";
import { NextResponse } from "next/server";
import { developers } from "@/data/developers";

//GET
export async function GET() {
  return NextResponse.json(developers);
}

//POST
export async function POST(request: Request) {
  const body = await request.json();

  if (!body.username || !body.name || !body.title || !body.bio) {
    return NextResponse.json(
      { error: "Missing required fields: username, name, title, bio" },
      { status: 400 }
    );
  }

  const newDeveloper: Developer = {
    id: developers.length + 1,
    username: body.username,
    name: body.name,
    title: body.title,
    bio: body.bio,
    rating: body.rating ?? 0,
    isNew: body.isNew ?? true,
  };

  developers.push(newDeveloper);
  return NextResponse.json(newDeveloper, { status: 201 });
}