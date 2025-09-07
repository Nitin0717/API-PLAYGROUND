import { type NextRequest, NextResponse } from "next/server"
import { ApiHelpers } from "@/lib/api-helpers"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limitParam = searchParams.get("limit")
    const limit = limitParam ? Number.parseInt(limitParam, 10) : 5

    const topSkills = ApiHelpers.getTopSkills(limit)
    return NextResponse.json(topSkills)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch top skills" }, { status: 500 })
  }
}
