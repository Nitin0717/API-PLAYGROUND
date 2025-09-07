import { type NextRequest, NextResponse } from "next/server"
import { ApiHelpers } from "@/lib/api-helpers"

export async function GET() {
  try {
    const profile = ApiHelpers.getProfile()
    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updates = await request.json()
    const updatedProfile = ApiHelpers.updateProfile(updates)
    return NextResponse.json(updatedProfile)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
  }
}
