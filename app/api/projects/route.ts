import { type NextRequest, NextResponse } from "next/server"
import { ApiHelpers } from "@/lib/api-helpers"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const skill = searchParams.get("skill")

    const projects = ApiHelpers.getProjects(skill || undefined)
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
