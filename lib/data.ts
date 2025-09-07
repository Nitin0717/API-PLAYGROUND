export interface Profile {
  id: string
  name: string
  email: string
  bio?: string
  location?: string
  avatar?: string
  education: Education[]
  skills: Skill[]
  projects: Project[]
  work: WorkExperience[]
  links: Link[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: number
  description?: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  yearsOfExperience: number
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  startDate: string
  endDate?: string
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  location?: string
}

export interface Link {
  id: string
  title: string
  url: string
  type: "github" | "linkedin" | "twitter" | "website" | "portfolio" | "other"
}

// Sample data 
export const profileData: Profile = {
  id: "1",
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  bio: "Full-stack developer passionate about creating innovative web applications and solving complex problems.",
  location: "San Francisco, CA",
  avatar: "/professional-headshot.png",
  education: [
    {
      id: "edu1",
      institution: "Stanford University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2018-09",
      endDate: "2022-06",
      gpa: 3.8,
      description: "Focused on software engineering and machine learning",
    },
    {
      id: "edu2",
      institution: "MIT",
      degree: "Master of Science",
      field: "Artificial Intelligence",
      startDate: "2022-09",
      endDate: "2024-06",
      gpa: 3.9,
      description: "Specialized in deep learning and natural language processing",
    },
  ],
  skills: [
    {
      id: "skill1",
      name: "JavaScript",
      category: "Programming Languages",
      level: "Expert",
      yearsOfExperience: 5,
    },
    {
      id: "skill2",
      name: "Python",
      category: "Programming Languages",
      level: "Expert",
      yearsOfExperience: 4,
    },
    {
      id: "skill3",
      name: "React",
      category: "Frontend Frameworks",
      level: "Expert",
      yearsOfExperience: 4,
    },
    {
      id: "skill4",
      name: "Node.js",
      category: "Backend Technologies",
      level: "Advanced",
      yearsOfExperience: 3,
    },
    {
      id: "skill5",
      name: "TypeScript",
      category: "Programming Languages",
      level: "Advanced",
      yearsOfExperience: 3,
    },
    {
      id: "skill6",
      name: "Next.js",
      category: "Frontend Frameworks",
      level: "Advanced",
      yearsOfExperience: 2,
    },
    {
      id: "skill7",
      name: "PostgreSQL",
      category: "Databases",
      level: "Intermediate",
      yearsOfExperience: 2,
    },
    {
      id: "skill8",
      name: "Docker",
      category: "DevOps",
      level: "Intermediate",
      yearsOfExperience: 2,
    },
  ],
  projects: [
    {
      id: "proj1",
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      startDate: "2023-01",
      endDate: "2023-06",
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      imageUrl: "/ecommerce-website-screenshot.png",
      featured: true,
    },
    {
      id: "proj2",
      title: "AI Chat Assistant",
      description:
        "Intelligent chat assistant using OpenAI GPT-4 with custom training data. Built with Python, FastAPI, and React.",
      technologies: ["Python", "FastAPI", "React", "OpenAI", "Redis"],
      startDate: "2023-07",
      endDate: "2023-12",
      githubUrl: "https://github.com/alexjohnson/ai-chat-assistant",
      liveUrl: "https://ai-chat-demo.vercel.app",
      imageUrl: "/ai-chat-interface.png",
      featured: true,
    },
    {
      id: "proj3",
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates using WebSockets.",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSockets"],
      startDate: "2024-01",
      githubUrl: "https://github.com/alexjohnson/task-manager",
      imageUrl: "/task-management-dashboard.png",
      featured: false,
    },
  ],
  work: [
    {
      id: "work1",
      company: "TechCorp Inc.",
      position: "Senior Full Stack Developer",
      startDate: "2022-07",
      endDate: "2024-01",
      description:
        "Led development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
      location: "San Francisco, CA",
    },
    {
      id: "work2",
      company: "StartupXYZ",
      position: "Frontend Developer",
      startDate: "2021-06",
      endDate: "2022-06",
      description:
        "Built responsive web applications and improved performance by 40%. Collaborated with design team to implement pixel-perfect UIs.",
      technologies: ["React", "JavaScript", "CSS", "Figma"],
      location: "Remote",
    },
    {
      id: "work3",
      company: "Freelance",
      position: "Web Developer",
      startDate: "2020-01",
      endDate: "2021-05",
      description:
        "Developed custom websites for small businesses and startups. Managed full project lifecycle from requirements to deployment.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
      location: "Remote",
    },
  ],
  links: [
    {
      id: "link1",
      title: "GitHub",
      url: "https://github.com/alexjohnson",
      type: "github",
    },
    {
      id: "link2",
      title: "LinkedIn",
      url: "https://linkedin.com/in/alexjohnson",
      type: "linkedin",
    },
    {
      id: "link3",
      title: "Personal Website",
      url: "https://alexjohnson.dev",
      type: "website",
    },
    {
      id: "link4",
      title: "Twitter",
      url: "https://twitter.com/alexjohnsondev",
      type: "twitter",
    },
  ],
}
