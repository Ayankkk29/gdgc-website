// Event Management Domain Data
import {
    PartyPopper,
    FileText,
    Clipboard,
    Calendar,
    Ticket,
} from "lucide-react";

const eventsDomain = {
    id: "eventManagementTeam",
    name: "Event Management",
    shortName: "Events",
    icon: PartyPopper,
    color: "#4285F4",
    description:
        "Plan, organize, and execute memorable events that bring the community together.",
    skills: [
        "Event Planning",
        "Project Management",
        "Venue Coordination",
        "Budget Management",
        "Vendor Relations",
        "Time Management",
        "Problem Solving",
        "Team Coordination",
    ],
    tools: [
        { name: "Google Sheets", icon: FileText },
        { name: "Notion", icon: FileText },
        { name: "Trello", icon: Clipboard },
        { name: "Eventbrite", icon: Ticket },
        { name: "Google Calendar", icon: Calendar },
    ],
    projects: [
        {
            id: 1,
            title: "DevFest 2025",
            description:
                "Annual flagship event featuring tech talks, workshops, and networking.",
            image: "/projects/devfest-2025.png",
            technologies: ["Event Management", "Workshops", "Networking"],
            githubUrl: null,
            liveUrl: "https://devfest.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Weekly Tech Talks",
            description:
                "Regular knowledge-sharing sessions within the community.",
            image: "/projects/tech-talks.png",
            technologies: ["Workshops", "Learning", "Community"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "How to Plan a Successful Tech Event",
            excerpt:
                "A comprehensive guide to organizing tech events from start to finish.",
            author: "Sanjay Patel",
            authorAvatar: "/avatars/sanjay.jpg",
            date: "2025-11-15",
            readTime: "8 min read",
            url: "/blogs/event-planning-guide",
            tags: ["Events", "Planning", "Community"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Event Planning Checklist",
            description:
                "Comprehensive checklist for planning successful community events.",
            url: "https://gdgc.dev/resources/event-checklist",
            type: "Resource",
        },
    ],
    team: {
        lead: {
            name: "Sanjay Patel",
            role: "Event Management Lead",
            avatar: "/team/sanjay.jpg",
            bio: "Expert in organizing large-scale tech events and community gatherings.",
            linkedin: "https://linkedin.com/in/sanjaypatel",
            email: "sanjay@gdgc.dev",
        },
        coLead: {
            name: "Sohail Khan",
            role: "Events Co-Lead",
            avatar: "/team/sohail.jpg",
            bio: "Events coordinator focusing on logistics and partnerships.",
            linkedin: "https://linkedin.com/in/sohailkhan",
            github: "",
            email: "sohail@gdgc.dev",
        },
        members: [
            {
                name: "Nisha Agarwal",
                role: "Events Coordinator",
                avatar: "/team/nisha.jpg",
                linkedin: "https://linkedin.com/in/nishaagarwal",
            },
            {
                name: "Raj Kumar",
                role: "Logistics Manager",
                avatar: "/team/raj.jpg",
                linkedin: "https://linkedin.com/in/rajkumar",
            },
        ],
    },
};

export default eventsDomain;
