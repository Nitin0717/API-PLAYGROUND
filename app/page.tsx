"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Github, ExternalLink, Mail, MapPin } from "lucide-react"

interface Profile {
  name: string
  email: string
  bio: string
  location: string
  skills: Array<{
    id: string
    name: string
    category: string
    level: string
    yearsOfExperience: number
  }>
  work: Array<{
    position: string
    company: string
    duration: string
    description: string
  }>
  education: Array<{
    degree: string
    institution: string
    year: string
    gpa?: string
  }>
  links: Array<{
    platform: string
    url: string
  }>
}

interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  status: string
}

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch profile data
        const profileRes = await fetch("/api/profile")
        const profileData = await profileRes.json()
        setProfile(profileData)

        // Fetch projects
        const projectsRes = await fetch("/api/projects")
        const projectsData = await projectsRes.json()
        setProjects(projectsData)
        setFilteredProjects(projectsData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const response = await fetch(`/api/projects?skill=${encodeURIComponent(searchTerm)}`)
        const data = await response.json()
        setFilteredProjects(data)
      } catch (error) {
        console.error("Error searching projects:", error)
      }
    } else {
      setFilteredProjects(projects)
    }
  }

  const clearSearch = () => {
    setSearchTerm("")
    setFilteredProjects(projects)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading profile data...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Failed to load profile data</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-3 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Me-API Playground
          </h1>
          <p className="text-xl text-muted-foreground mb-2">Personal Profile API & Interactive Frontend</p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
            <span>•</span>
            <Mail className="h-4 w-4" />
            <span>{profile.email}</span>
          </div>
        </header>

        {/* Search Section */}
        <div className="mb-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Projects by Skill
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Search by skill (e.g., React, Python, TypeScript)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="flex-1"
                />
                <Button onClick={handleSearch} className="bg-emerald-600 hover:bg-emerald-700">
                  Search
                </Button>
                {searchTerm && (
                  <Button variant="outline" onClick={clearSearch}>
                    Clear
                  </Button>
                )}
              </div>
              {searchTerm && (
                <p className="text-sm text-muted-foreground mt-2">
                  Showing projects with skill: <Badge variant="secondary">{searchTerm}</Badge>
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="projects">Projects ({filteredProjects.length})</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{profile.name}</CardTitle>
                <CardDescription className="text-base">{profile.bio}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Education</h4>
                    <div className="space-y-2">
                      {profile.education?.map((edu, index) => (
                        <div key={index} className="border-l-2 border-emerald-200 pl-4">
                          <p className="font-medium">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground">
                            {edu.institution} • {edu.year}
                          </p>
                          {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Links</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.links?.map((link, index) => (
                        <Badge key={index} variant="outline" className="hover:bg-emerald-50">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {link.platform}
                          </a>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                        <Badge variant={project.status === "completed" ? "default" : "secondary"} className="mt-1">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies?.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-muted-foreground">No projects found matching your search criteria.</p>
                  <Button variant="outline" onClick={clearSearch} className="mt-2 bg-transparent">
                    View All Projects
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience">
            <div className="space-y-6">
              {profile.work?.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{job.position}</CardTitle>
                    <CardDescription className="text-base">
                      {job.company} • {job.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Click on any skill to search for related projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills?.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                      onClick={() => {
                        setSearchTerm(skill.name)
                        handleSearch()
                      }}
                    >
                      {skill.name} ({skill.level})
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* API Health Status */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            API Status:{" "}
            <Badge variant="default" className="bg-emerald-600">
              Healthy
            </Badge>
          </p>
        </div>
      </div>
    </div>
  )
}
