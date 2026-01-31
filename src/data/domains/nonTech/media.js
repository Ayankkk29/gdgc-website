// Videography & Photography Domain Data
import { Camera, Film, Video, CameraOff, Videotape } from "lucide-react";

const mediaDomain = {
    id: "videoPhotographyTeam",
    name: "Videography & Photography",
    shortName: "Media",
    icon: Camera,
    color: "#EA4335",
    description:
        "Capture and create visual stories that showcase the community's journey.",
    skills: [
        "Photography",
        "Videography",
        "Video Editing",
        "Photo Editing",
        "Lighting Techniques",
        "Drone Photography",
        "Live Streaming",
        "Content Production",
    ],
    tools: [
        { name: "Adobe Premiere", icon: Film },
        { name: "DaVinci Resolve", icon: Video },
        { name: "Lightroom", icon: Camera },
        { name: "OBS Studio", icon: Videotape },
        { name: "After Effects", icon: Film },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Documentary",
            description:
                "Short documentary showcasing the community's impact and journey.",
            image: "https://placehold.co/400x400",
            technologies: ["Videography", "Editing", "Storytelling"],
            githubUrl: null,
            liveUrl: "https://youtube.com/gdgc",
            featured: true,
        },
        {
            id: 2,
            title: "Event Highlights",
            description: "Professional coverage of all community events.",
            image: "https://placehold.co/400x400",
            technologies: ["Photography", "Videography", "Editing"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Capturing Tech Events Like a Pro",
            excerpt:
                "Tips and techniques for photographing tech conferences and meetups.",
            author: "Aryan Khanna",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-12-12",
            readTime: "5 min read",
            url: "/blogs/event-photography",
            tags: ["Photography", "Events", "Tips"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "YouTube Creator Academy",
            description: "Free resources for creating engaging video content.",
            url: "https://creatoracademy.youtube.com",
            type: "Learning Resource",
        },
    ],
    team: {
        lead: {
            name: "Aryan Khanna",
            role: "Media Lead",
            avatar: "https://placehold.co/128x128",
            bio: "Professional videographer and photographer specializing in tech events.",
            linkedin: "https://linkedin.com/in/aryankhanna",
            email: "aryan@gdgc.dev",
        },
        coLead: {
            name: "Mitali Das",
            role: "Media Co-Lead",
            avatar: "https://placehold.co/128x128",
            bio: "Videographer and editor working on event coverage and tutorials.",
            linkedin: "https://linkedin.com/in/mitalidas",
            github: "",
            email: "mitali@gdgc.dev",
        },
        members: [
            {
                name: "Simran Kaur",
                role: "Photographer",
                avatar: "https://placehold.co/128x128",
                linkedin: "https://linkedin.com/in/simrankaur",
            },
            {
                name: "Harsh Pandey",
                role: "Video Editor",
                avatar: "https://placehold.co/128x128",
                linkedin: "https://linkedin.com/in/harshpandey",
            },
        ],
    },
};

export default mediaDomain;
