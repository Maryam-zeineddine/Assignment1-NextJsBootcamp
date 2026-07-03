import { Developer } from "@/types/developers";
import { NextResponse } from "next/server";
import { developers } from "@/data/developers";

//GET by id
export async function GET(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }) 
  {
  const { id } = await params;
  const developer = developers.find((dev) => dev.id === parseInt(id));

  if (!developer) {
    return NextResponse.json({ error: "Developer not found" }, { status: 404 });
  }

  return NextResponse.json(developer);
}

//UPDATE by id
export async function PUT (
    request : Request,
    {params} : {params : Promise<{ id : string }>}
)
{
    const body = await request.json();
    const {id} = await params;
    const developer = developers.find(d => d.id === parseInt(id));
    if (!developer) {
        return NextResponse.json({ error: "Developer not found" }, { status: 404 });
    }
    developer.username = body.username ?? developer.username;
    developer.name = body.name ?? developer.name;
    developer.title = body.title ?? developer.title;
    developer.bio = body.bio ?? developer.bio;
    developer.rating = body.rating ?? developer.rating;
    developer.isNew = body.isNew ?? developer.isNew;
    return NextResponse.json(developer);
}

//DELETE by id
export async function DELETE(
    request : Request,
    {params} : {params : Promise<{ id : string }>}
)
{
    const {id} = await params;
    const index = developers.findIndex(d => d.id === parseInt(id));
    if (index === -1) {
        return NextResponse.json({ error: "Developer not found" }, { status: 404 });
    }
    developers.splice(index, 1);
    return NextResponse.json({ message: "Developer deleted successfully" });
}