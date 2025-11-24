
import { NextResponse } from "next/server";
import { grievances } from "../route";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const s = url.searchParams.get("ticket") ?? url.searchParams.get("id");
  const id = Number(s);
  if (!Number.isFinite(id)) {
    return NextResponse.json({ error: "Missing or invalid id" }, { status: 400 });
  }
  const item = grievances.find(g => g.id === id);
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}
