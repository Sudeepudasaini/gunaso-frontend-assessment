
import { NextResponse } from "next/server";

export type Grievance = {
  id: number;
  category: string;
  district: string;
  address: string;
  wardNo: string;
  date: string;          
  era: "AD" | "BS";
  description: string;
  attachments?: string[]; 
  status: "Pending" | "Resolved" | "Closed";
  createdAt: string;
};

export let grievances: Grievance[] = [
  {
    id: 56,
    category: "Road",
    district: "Kathmandu",
    address: "Sundhara",
    wardNo: "11",
    date: "2079-01-12",
    era: "BS",
    description: "Road broken",
    attachments: [],
    status: "Resolved",
    createdAt: new Date().toISOString(),
  },
  {
    id: 57,
    category: "Water",
    district: "Bhaktapur",
    address: "Sallaghari",
    wardNo: "3",
    date: "2025-04-05",
    era: "AD",
    description: "Water supply issue",
    attachments: [],
    status: "Pending",
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(grievances);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItem: Grievance = {
    id: grievances.length ? Math.max(...grievances.map(g => g.id)) + 1 : 1,
    status: "Pending",
    createdAt: new Date().toISOString(),
    attachments: body.attachments ?? [],
    ...body,
  };
  grievances.unshift(newItem);
  return NextResponse.json(newItem, { status: 201 });
}
