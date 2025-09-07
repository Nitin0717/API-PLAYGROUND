# Me-API Playground

A comprehensive personal profile API playground that stores profile information and exposes it via a REST API with a minimal frontend interface.

## Live Demo

- **Frontend**: [Deployed on Vercel](https://your-app.vercel.app)
- **API Base URL**: `https://your-app.vercel.app/api`
- **Repository**: [GitHub Repository](https://github.com/your-username/me-api-playground)

##  Project Overview

This project implements a full-stack application that serves as a personal profile API playground. It includes:

- **Backend API**: RESTful endpoints for profile data management
- **Frontend Interface**: Minimal UI for searching and viewing profile information
- **Data Storage**: In-memory data structure with comprehensive profile schema
- **Documentation**: Complete API documentation and setup instructions


### Technology Stack
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Data Storage**: In-memory TypeScript objects
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS with custom design tokens

### Project Structure
\`\`\`
├── app/
│   ├── api/                    # API routes
│   │   ├── profile/           # Profile CRUD operations
│   │   ├── projects/          # Projects with skill filtering
│   │   ├── skills/            # Skills management
│   │   ├── work/              # Work experience
│   │   ├── education/         # Education history
│   │   ├── links/             # Social/professional links
│   │   ├── search/            # Global search functionality
│   │   └── health/            # Health check endpoint
│   ├── globals.css            # Global styles and design tokens
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main frontend interface
├── lib/
│   ├── data.ts                # Data models and sample data
│   └── api-helpers.ts         # API utility functions
├── components/ui/             # Reusable UI components
└── README.md                  # This file
\`\`\`



### Profile Interface
\`\`\`typescript
interface Profile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  location?: string;
  avatar?: string;
  education: Education[];
  skills: Skill[];
  projects: Project[];
  work: WorkExperience[];
  links: Link[];
}
\`\`\`

### Core Entities

#### Education
\`\`\`typescript
interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: number;
  description?: string;
}
\`\`\`

#### Skills
\`\`\`typescript
interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience: number;
}
\`\`\`

#### Projects
\`\`\`typescript
interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}
\`\`\`

#### Work Experience
\`\`\`typescript
interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  location?: string;
}
\`\`\`

#### Links
\`\`\`typescript
interface Link {
  id: string;
  title: string;
  url: string;
  type: 'github' | 'linkedin' | 'twitter' | 'website' | 'portfolio' | 'other';
}
\`\`\`

## 🔌 API Documentation

### Base URL
\`\`\`
https://your-app.vercel.app/api
\`\`\`

### Endpoints

#### Profile Management
- **GET** `/api/profile` - Get complete profile information
- **PUT** `/api/profile` - Update profile information

#### Projects
- **GET** `/api/projects` - Get all projects
- **GET** `/api/projects?skill=python` - Filter projects by skill
- **GET** `/api/projects/[id]` - Get specific project by ID

#### Skills
- **GET** `/api/skills` - Get all skills
- **GET** `/api/skills/top` - Get top skills by experience
- **GET** `/api/skills/top?limit=3` - Get top N skills

#### Work Experience
- **GET** `/api/work` - Get all work experience

#### Education
- **GET** `/api/education` - Get all education history

#### Links
- **GET** `/api/links` - Get all social/professional links

#### Search
- **GET** `/api/search?q=react` - Search across projects, skills, and work experience

#### Health Check
- **GET** `/api/health` - API health status

## Sample curl Commands

### Basic Profile Operations
\`\`\`bash
# Get complete profile
curl -X GET "https://your-app.vercel.app/api/profile" \
  -H "Content-Type: application/json"

# Update profile (example)
curl -X PUT "https://your-app.vercel.app/api/profile" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name",
    "email": "updated@example.com",
    "bio": "Updated bio"
  }'
\`\`\`

### Project Queries
\`\`\`bash
# Get all projects
curl -X GET "https://your-app.vercel.app/api/projects"

# Filter projects by skill
curl -X GET "https://your-app.vercel.app/api/projects?skill=React"

# Get specific project
curl -X GET "https://your-app.vercel.app/api/projects/proj1"
\`\`\`

### Skills and Search
\`\`\`bash
# Get all skills
curl -X GET "https://your-app.vercel.app/api/skills"

# Get top 3 skills
curl -X GET "https://your-app.vercel.app/api/skills/top?limit=3"

# Search across all data
curl -X GET "https://your-app.vercel.app/api/search?q=python"
\`\`\`

### Health and Utility
\`\`\`bash
# Health check
curl -X GET "https://your-app.vercel.app/api/health"

# Get work experience
curl -X GET "https://your-app.vercel.app/api/work"

# Get education
curl -X GET "https://your-app.vercel.app/api/education"

# Get social links
curl -X GET "https://your-app.vercel.app/api/links"
\`\`\`

##  Postman Collection

Import this JSON into Postman for easy API testing:

\`\`\`json
{
  "info": {
    "name": "Me-API Playground",
    "description": "Complete API collection for testing all endpoints"
  },
  "item": [
    {
      "name": "Profile",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/profile",
          "host": ["{{baseUrl}}"],
          "path": ["api", "profile"]
        }
      }
    },
    {
      "name": "Projects - All",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/projects",
          "host": ["{{baseUrl}}"],
          "path": ["api", "projects"]
        }
      }
    },
    {
      "name": "Projects - Filter by Skill",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/projects?skill=React",
          "host": ["{{baseUrl}}"],
          "path": ["api", "projects"],
          "query": [{"key": "skill", "value": "React"}]
        }
      }
    },
    {
      "name": "Skills - Top",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/skills/top?limit=5",
          "host": ["{{baseUrl}}"],
          "path": ["api", "skills", "top"],
          "query": [{"key": "limit", "value": "5"}]
        }
      }
    },
    {
      "name": "Search",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/search?q=python",
          "host": ["{{baseUrl}}"],
          "path": ["api", "search"],
          "query": [{"key": "q", "value": "python"}]
        }
      }
    },
    {
      "name": "Health Check",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{baseUrl}}/api/health",
          "host": ["{{baseUrl}}"],
          "path": ["api", "health"]
        }
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "https://your-app.vercel.app",
      "type": "string"
    }
  ]
}
\`\`\`

##  Frontend Features

### Core Functionality
- **Profile Overview**: Display complete profile information with avatar, contact details, and top skills
- **Project Filtering**: Filter projects by technology/skill with real-time updates
- **Global Search**: Search across projects, skills, and work experience
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive UI**: Click skills to filter projects, hover effects, and smooth transitions

### User Interface
- **Clean Design**: Minimal interface with green color palette
- **Tabbed Navigation**: Organized sections for Projects, Experience, Education, and Skills
- **Search Bar**: Prominent search functionality with clear filters
- **Skill Tags**: Interactive skill badges for easy project filtering
- **External Links**: Direct links to GitHub, LinkedIn, and project demos

##  Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd me-api-playground
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Deployment

#### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with default Next.js settings
4. Access at provided Vercel URL

#### Alternative Platforms
- **Netlify**: Static deployment with API routes
- **Railway**: Full-stack deployment with database options
- **Heroku**: Containerized deployment

##  Known Limitations

### Current Implementation
1. **In-Memory Storage**: Data is stored in memory and resets on server restart
2. **No Persistence**: Changes made via API are not permanently saved
3. **Single User**: Designed for single profile, not multi-user system
4. **No Authentication**: All endpoints are publicly accessible
5. **No Rate Limiting**: No protection against API abuse
6. **CORS**: May need configuration for cross-origin requests in production

### Scalability Considerations
1. **Database Migration**: For production use, migrate to PostgreSQL/MongoDB
2. **Authentication**: Implement JWT or OAuth for secure access
3. **Caching**: Add Redis for improved performance
4. **Validation**: Enhanced input validation and sanitization
5. **Logging**: Comprehensive logging and monitoring
6. **Testing**: Unit and integration test coverage

### Performance Notes
1. **Client-Side Rendering**: Some components could be server-side rendered
2. **Image Optimization**: Images are placeholder URLs, not optimized
3. **Bundle Size**: Could be optimized with code splitting
4. **SEO**: Limited SEO optimization for single-page application

##  Resume

**Alex Johnson - Full Stack Developer**
-  Email: alex.johnson@example.com
-  LinkedIn: [linkedin.com/in/alexjohnson](https://linkedin.com/in/alexjohnson)
-  Portfolio: [alexjohnson.dev](https://alexjohnson.dev)
-  GitHub: [github.com/alexjohnson](https://github.com/alexjohnson)

**Download Resume**: [Resume PDF](https://your-app.vercel.app/resume.pdf)

##  Testing Checklist

### API Endpoints Verification
- [ ] **GET /api/health** returns 200 status
- [ ] **GET /api/profile** returns complete profile data
- [ ] **GET /api/projects?skill=python** returns filtered results
- [ ] **GET /api/skills/top** returns top skills by experience
- [ ] **GET /api/search?q=react** returns relevant search results
- [ ] All endpoints return proper JSON responses
- [ ] Error handling returns appropriate HTTP status codes

### Frontend Functionality
- [ ] Profile information displays correctly
- [ ] Search functionality filters projects by skill
- [ ] All navigation tabs work (Profile, Projects, Experience, Skills)
- [ ] External links open in new tabs
- [ ] Responsive design works on mobile devices
- [ ] Loading states display properly

### Deployment Verification
- [ ] Frontend loads without errors at deployed URL
- [ ] All API endpoints accessible via deployed URL
- [ ] CORS configured properly for cross-origin requests
- [ ] Static assets (images, CSS) load correctly

---

**Built with  using Next.js, TypeScript, and Tailwind CSS**
