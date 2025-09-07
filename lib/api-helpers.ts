import { profileData, type Profile, type Project, type Skill } from "./data"


let currentProfile: Profile = { ...profileData }

export class ApiHelpers {
  static getProfile(): Profile {
    return currentProfile
  }

  static updateProfile(updates: Partial<Profile>): Profile {
    currentProfile = { ...currentProfile, ...updates }
    return currentProfile
  }


  static getProjects(skill?: string): Project[] {
    if (!skill) return currentProfile.projects

    return currentProfile.projects.filter((project) =>
      project.technologies.some((tech) => tech.toLowerCase().includes(skill.toLowerCase())),
    )
  }

  static getProjectById(id: string): Project | null {
    return currentProfile.projects.find((p) => p.id === id) || null
  }


  static getSkills(): Skill[] {
    return currentProfile.skills
  }

  static getTopSkills(limit = 5): Skill[] {
    return currentProfile.skills.sort((a, b) => b.yearsOfExperience - a.yearsOfExperience).slice(0, limit)
  }


  static search(query: string): {
    projects: Project[]
    skills: Skill[]
    work: any[]
  } {
    const lowerQuery = query.toLowerCase()

    const projects = currentProfile.projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery)),
    )

    const skills = currentProfile.skills.filter(
      (skill) => skill.name.toLowerCase().includes(lowerQuery) || skill.category.toLowerCase().includes(lowerQuery),
    )

    const work = currentProfile.work.filter(
      (job) =>
        job.company.toLowerCase().includes(lowerQuery) ||
        job.position.toLowerCase().includes(lowerQuery) ||
        job.description.toLowerCase().includes(lowerQuery) ||
        job.technologies.some((tech) => tech.toLowerCase().includes(lowerQuery)),
    )

    return { projects, skills, work }
  }

  static getHealth() {
    return {
      status: "healthy",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      uptime: process.uptime(),
    }
  }
}
