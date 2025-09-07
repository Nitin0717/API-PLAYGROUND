import { NextResponse } from "next/server"
import { ApiHelpers } from "@/lib/api-helpers"

export async function GET() {
  try {
    const profile = ApiHelpers.getProfile()
    return NextResponse.json(profile.links)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch links" }, { status: 500 })
  }
}
