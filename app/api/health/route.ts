import { NextResponse } from "next/server"
import { ApiHelpers } from "@/lib/api-helpers"

export async function GET() {
  try {
    const health = ApiHelpers.getHealth()
    return NextResponse.json(health)
  } catch (error) {
    return NextResponse.json({ error: "Health check failed" }, { status: 500 })
  }
}
