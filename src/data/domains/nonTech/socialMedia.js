// Social Media & Marketing Domain Data
import {
    Megaphone,
    Smartphone,
    Palette,
    BarChart2,
    Mail,
    Coffee,
} from "lucide-react";

const socialMediaDomain = {
    id: "socialMediaMarketingTeam",
    name: "Social Media & Marketing",
    shortName: "Marketing",
    icon: Megaphone,
    color: "#34A853",
    description:
        "Amplify the community's reach through strategic social media and marketing initiatives.",
    skills: [
        "Social Media Management",
        "Content Strategy",
        "SEO & Analytics",
        "Email Marketing",
        "Community Engagement",
        "Brand Management",
        "Copywriting",
        "Campaign Planning",
    ],
    tools: [
        { name: "Buffer", icon: Smartphone },
        { name: "Canva", icon: Palette },
        { name: "Google Analytics", icon: BarChart2 },
        { name: "Mailchimp", icon: Mail },
        { name: "Hootsuite", icon: Coffee },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Social Media Revamp",
            description:
                "Complete overhaul of social media presence across all platforms.",
            image: "/projects/social-revamp.png",
            technologies: ["Strategy", "Content", "Analytics"],
            githubUrl: null,
            liveUrl: "https://instagram.com/gdgc",
            featured: true,
        },
        {
            id: 2,
            title: "Newsletter Campaign",
            description:
                "Weekly newsletter keeping the community informed and engaged.",
            image: "/projects/newsletter.png",
            technologies: ["Email Marketing", "Content", "Engagement"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Building a Tech Community on Social Media",
            excerpt:
                "Strategies for growing and engaging a tech community online.",
            author: "Priyanka Roy",
            authorAvatar: "/avatars/priyanka.jpg",
            date: "2025-12-08",
            readTime: "6 min read",
            url: "/blogs/social-media-community",
            tags: ["Marketing", "Social Media", "Community"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Google Marketing Platform",
            description: "Tools and resources for effective digital marketing.",
            url: "https://marketingplatform.google.com",
            type: "Resource",
        },
    ],
    team: {
        lead: {
            name: "Priyanka Roy",
            role: "Marketing Lead",
            avatar: "/team/priyanka.jpg",
            bio: "Digital marketing specialist with a passion for community building.",
            linkedin: "https://linkedin.com/in/priyankaroy",
            email: "priyanka@gdgc.dev",
        },
        coLead: {
            name: "Rhea Gupta",
            role: "Social Media Co-Lead",
            avatar: "/team/rhea.jpg",
            bio: "Content strategist and community manager focused on growth.",
            linkedin: "https://linkedin.com/in/rheagupta",
            github: "",
            email: "rhea@gdgc.dev",
        },
        members: [
            {
                name: "Ankit Verma",
                role: "Social Media Manager",
                avatar: "/team/ankit.jpg",
                linkedin: "https://linkedin.com/in/ankitverma",
            },
            {
                name: "Megha Sharma",
                role: "Content Strategist",
                avatar: "/team/megha.jpg",
                linkedin: "https://linkedin.com/in/meghasharma",
            },
        ],
    },
};

export default socialMediaDomain;
