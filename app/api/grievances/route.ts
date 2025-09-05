import { NextResponse } from "next/server";

let grievances = [
  { id: 1, title: "Road broken", status: "pending" },
  { id: 2, title: "Water supply issue", status: "resolved" }
];

export async function GET() {
  return NextResponse.json(grievances);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItem = { id: grievances.length + 1, ...body };
  grievances.push(newItem);
  return NextResponse.json(newItem, { status: 201 });
}
