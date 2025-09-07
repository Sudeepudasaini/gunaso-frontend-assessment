// import { NextResponse } from "next/server";
// import type { Grievance } from "../route";

// declare const globalThis: any; // silence TS for the shared module cache

// // Re-use the same module instance from app/api/grievances/route.ts
// const mod = await import("../route");
// const { grievances } = mod as any;

// export async function GET(
//   _req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const id = Number(params.id);
//   const item = grievances.find((g: any) => g.id === id);
//   if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
//   return NextResponse.json(item);
// }

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
