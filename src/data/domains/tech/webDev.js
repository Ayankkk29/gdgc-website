// Web Development Domain Data
import { Globe, Monitor, Code, Zap, Database, Palette } from "lucide-react";

const webDevDomain = {
    id: "webDTeam",
    name: "Web Development",
    shortName: "Web Dev",
    icon: Globe,
    color: "#4285F4",
    description:
        "Build modern, responsive, and scalable web applications using cutting-edge technologies.",
    skills: [
        "HTML5 & CSS3",
        "JavaScript & TypeScript",
        "React.js & Next.js",
        "Node.js & Express",
        "Database Management",
        "API Development",
        "Version Control (Git)",
        "Responsive Design",
    ],
    tools: [
        { name: "VS Code", icon: Monitor },
        { name: "React", icon: Code },
        { name: "Node.js", icon: Zap },
        { name: "MongoDB", icon: Database },
        { name: "Firebase", icon: Zap },
        { name: "Tailwind CSS", icon: Palette },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Community Website",
            description:
                "Official website for the Google Developer Groups on Campus community.",
            image: "/projects/gdgc-website.png",
            technologies: ["React", "Tailwind CSS", "Vite"],
            githubUrl: "https://github.com/gdgc/website",
            liveUrl: "https://gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Event Management System",
            description:
                "A comprehensive platform for managing community events and registrations.",
            image: "/projects/event-system.png",
            technologies: ["Next.js", "PostgreSQL", "Prisma"],
            githubUrl: "https://github.com/gdgc/events",
            liveUrl: null,
            featured: false,
        },
        {
            id: 3,
            title: "Resource Hub",
            description:
                "Centralized platform for learning resources and documentation.",
            image: "/projects/resource-hub.png",
            technologies: ["React", "Firebase", "Material UI"],
            githubUrl: "https://github.com/gdgc/resources",
            liveUrl: "https://resources.gdgc.dev",
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Getting Started with React 19",
            excerpt:
                "Explore the new features and improvements in React 19 and how to migrate your projects.",
            author: "Priya Sharma",
            authorAvatar: "/avatars/priya.jpg",
            date: "2025-12-15",
            readTime: "8 min read",
            url: "/blogs/react-19-guide",
            tags: ["React", "JavaScript", "Frontend"],
        },
        {
            id: 2,
            title: "Building Accessible Web Applications",
            excerpt:
                "Learn the best practices for creating web apps that everyone can use.",
            author: "Amit Kumar",
            authorAvatar: "/avatars/amit.jpg",
            date: "2025-11-20",
            readTime: "6 min read",
            url: "/blogs/accessibility-guide",
            tags: ["Accessibility", "HTML", "UX"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "MDN Web Docs - JavaScript",
            description:
                "Comprehensive documentation for JavaScript programming.",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            type: "Documentation",
        },
        {
            id: 2,
            title: "React Official Documentation",
            description:
                "Learn React from the official docs with interactive examples.",
            url: "https://react.dev",
            type: "Documentation",
        },
        {
            id: 3,
            title: "Web.dev by Google",
            description: "Guidance for building modern web experiences.",
            url: "https://web.dev",
            type: "Learning Resource",
        },
    ],
    team: {
        lead: {
            name: "Rahul Verma",
            role: "Web Development Lead",
            avatar: "/team/rahul.jpg",
            bio: "Full-stack developer passionate about building scalable web applications.",
            linkedin: "https://linkedin.com/in/rahulverma",
            github: "https://github.com/rahulverma",
            email: "rahul@gdgc.dev",
        },
        coLead: {
            name: "Priya Sharma",
            role: "Web Development Co-Lead",
            avatar: "/team/priya.jpg",
            bio: "Frontend engineer and mentor, focusing on accessibility and performance.",
            linkedin: "https://linkedin.com/in/priyasharma",
            github: "https://github.com/priyasharma",
            email: "priya@gdgc.dev",
        },
        members: [
            {
                name: "Sneha Patel",
                role: "Frontend Developer",
                avatar: "/team/sneha.jpg",
                linkedin: "https://linkedin.com/in/snehapatel",
                github: "https://github.com/snehapatel",
            },
            {
                name: "Arjun Singh",
                role: "Backend Developer",
                avatar: "/team/arjun.jpg",
                linkedin: "https://linkedin.com/in/arjunsingh",
                github: "https://github.com/arjunsingh",
            },
            {
                name: "Kavya Reddy",
                role: "Full Stack Developer",
                avatar: "/team/kavya.jpg",
                linkedin: "https://linkedin.com/in/kavyareddy",
                github: "https://github.com/kavyareddy",
            },
        ],
    },
};

export default webDevDomain;
