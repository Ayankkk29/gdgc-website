// Women Techmakers Domain Data
import { Users, Video, MessageSquare, FileText, Palette } from "lucide-react";

const wtmDomain = {
    id: "womenTechmakers",
    name: "Women Techmakers",
    shortName: "WTM",
    icon: Users,
    color: "#1DA462",
    description:
        "Empowering women in technology through visibility, community, and resources.",
    skills: [
        "Technical Leadership",
        "Public Speaking",
        "Community Building",
        "Mentorship",
        "Career Development",
        "Diversity & Inclusion",
        "Technical Skills (Various)",
        "Networking",
    ],
    tools: [
        { name: "Google Meet", icon: Video },
        { name: "Slack", icon: MessageSquare },
        { name: "Notion", icon: FileText },
        { name: "Canva", icon: Palette },
    ],
    projects: [
        {
            id: 1,
            title: "WTM Mentorship Program",
            description:
                "Structured mentorship program connecting women in tech with industry experts.",
            image: "/projects/wtm-mentorship.png",
            technologies: ["Community", "Mentorship", "Career Growth"],
            githubUrl: null,
            liveUrl: "https://wtm.gdgc.dev/mentorship",
            featured: true,
        },
        {
            id: 2,
            title: "Tech Talk Series",
            description:
                "Monthly speaker series featuring women leaders in technology.",
            image: "/projects/tech-talks.png",
            technologies: ["Events", "Networking", "Learning"],
            githubUrl: null,
            liveUrl: "https://wtm.gdgc.dev/talks",
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Breaking Barriers in Tech",
            excerpt:
                "Stories and strategies from women who are making an impact in technology.",
            author: "Ananya Krishnan",
            authorAvatar: "/avatars/ananya.jpg",
            date: "2025-12-01",
            readTime: "7 min read",
            url: "/blogs/breaking-barriers",
            tags: ["Women in Tech", "Career", "Inspiration"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Women Techmakers Official",
            description:
                "Google's program providing visibility, community, and resources for women in tech.",
            url: "https://developers.google.com/womentechmakers",
            type: "Community",
        },
        {
            id: 2,
            title: "She Code Africa",
            description:
                "Non-profit organization focused on celebrating women in tech across Africa.",
            url: "https://shecodeafrica.org",
            type: "Community",
        },
    ],
    team: {
        lead: {
            name: "Ananya Krishnan",
            role: "Women Techmakers Lead",
            avatar: "/team/ananya.jpg",
            bio: "Passionate about creating inclusive spaces for women in technology.",
            linkedin: "https://linkedin.com/in/ananyakrishnan",
            github: "https://github.com/ananyakrishnan",
            email: "ananya@gdgc.dev",
        },
        coLead: {
            name: "Anand Patel",
            role: "WTM Co-Lead",
            avatar: "/team/anand.jpg",
            bio: "Community organizer and developer advocate focused on outreach.",
            linkedin: "https://linkedin.com/in/anandpatel",
            github: "https://github.com/anandpatel",
            email: "anand@gdgc.dev",
        },
        members: [
            {
                name: "Divya Menon",
                role: "Community Coordinator",
                avatar: "/team/divya.jpg",
                linkedin: "https://linkedin.com/in/divyamenon",
                github: "https://github.com/divyamenon",
            },
            {
                name: "Riya Bansal",
                role: "Events Coordinator",
                avatar: "/team/riya.jpg",
                linkedin: "https://linkedin.com/in/riyabansal",
                github: "https://github.com/riyabansal",
            },
        ],
    },
};

export default wtmDomain;
