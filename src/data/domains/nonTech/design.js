// Design & Content Domain Data
import { Palette, Layers, FileText, Wand } from "lucide-react";

const designDomain = {
    id: "designContentTeam",
    name: "Design & Content",
    shortName: "Design",
    icon: Palette,
    color: "#FBBC04",
    description:
        "Create visually stunning designs and compelling content that tells our story.",
    skills: [
        "Graphic Design",
        "UI/UX Design",
        "Brand Identity",
        "Typography",
        "Content Writing",
        "Motion Graphics",
        "Illustration",
        "Design Systems",
    ],
    tools: [
        { name: "Figma", icon: Layers },
        { name: "Adobe Creative Suite", icon: Wand },
        { name: "Canva", icon: Palette },
        { name: "Notion", icon: FileText },
        { name: "Lottie", icon: FileText },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Brand Guidelines",
            description:
                "Comprehensive brand identity system for the community.",
            image: "https://placehold.co/400x400",
            technologies: ["Branding", "Design System", "Guidelines"],
            githubUrl: null,
            liveUrl: "https://brand.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Event Collateral Design",
            description:
                "Visual assets for all community events and activities.",
            image: "https://placehold.co/400x400",
            technologies: ["Graphic Design", "Print", "Digital"],
            githubUrl: null,
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Designing for Developer Communities",
            excerpt:
                "Creating visual content that resonates with technical audiences.",
            author: "Tanya Gupta",
            authorAvatar: "https://placehold.co/128x128",
            date: "2025-11-28",
            readTime: "7 min read",
            url: "/blogs/design-for-developers",
            tags: ["Design", "Community", "Branding"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Material Design Guidelines",
            description:
                "Google's design system for creating beautiful, usable products.",
            url: "https://m3.material.io",
            type: "Design System",
        },
        {
            id: 2,
            title: "Figma Community",
            description:
                "Free design resources and inspiration from the community.",
            url: "https://www.figma.com/community",
            type: "Resource",
        },
    ],
    team: {
        lead: {
            name: "Tanya Gupta",
            role: "Design Lead",
            avatar: "https://placehold.co/128x128",
            bio: "Visual designer creating impactful designs for tech communities.",
            linkedin: "https://linkedin.com/in/tanyagupta",
            email: "tanya@gdgc.dev",
        },
        coLead: {
            name: "Divya Iyer",
            role: "Design Co-Lead",
            avatar: "https://placehold.co/128x128",
            bio: "Product designer focused on UX systems and prototyping.",
            linkedin: "https://linkedin.com/in/divyaiyer",
            github: "",
            email: "divya@gdgc.dev",
        },
        members: [
            {
                name: "Vivek Nair",
                role: "UI/UX Designer",
                avatar: "https://placehold.co/128x128",
                linkedin: "https://linkedin.com/in/viveknair",
            },
            {
                name: "Ishita Das",
                role: "Content Writer",
                avatar: "https://placehold.co/128x128",
                linkedin: "https://linkedin.com/in/ishitadas",
            },
        ],
    },
};

export default designDomain;
