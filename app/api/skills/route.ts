import { NextResponse } from "next/server"
import { ApiHelpers } from "@/lib/api-helpers"

export async function GET() {
  try {
    const skills = ApiHelpers.getSkills()
    return NextResponse.json(skills)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 })
  }
}
