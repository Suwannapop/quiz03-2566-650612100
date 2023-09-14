import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Suppakorn Suwannapop",
    studentId: "650612100",
  });
};
