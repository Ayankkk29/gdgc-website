// Android Development Domain Data
import { Smartphone, Code } from "lucide-react";

const androidDomain = {
    id: "androidTeam",
    name: "Android Development",
    shortName: "Android",
    icon: Smartphone,
    color: "#34A853",
    description:
        "Create powerful Android applications using Kotlin and modern Android development practices.",
    skills: ["Kotlin Programming", "Android SDK", "Jetpack Compose"],
    tools: [
        { name: "Android Studio", icon: Code },
        { name: "Kotlin", icon: Code },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC Events App",
            description:
                "Mobile app for tracking and registering for GDGC events.",
            image: "/projects/gdgc-app.png",
            technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
            githubUrl: "https://github.com/gdgc/android-app",
            liveUrl:
                "https://play.google.com/store/apps/details?id=dev.gdgc.app",
            featured: true,
        },
        {
            id: 2,
            title: "Study Buddy",
            description:
                "A collaborative study app for students with shared notes and schedules.",
            image: "/projects/study-buddy.png",
            technologies: ["Kotlin", "Room", "Material Design 3"],
            githubUrl: "https://github.com/gdgc/study-buddy",
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Mastering Jetpack Compose",
            excerpt:
                "A comprehensive guide to building beautiful UIs with Jetpack Compose.",
            author: "Vikram Joshi",
            authorAvatar: "/avatars/vikram.jpg",
            date: "2025-12-10",
            readTime: "10 min read",
            url: "/blogs/jetpack-compose-guide",
            tags: ["Android", "Kotlin", "Jetpack Compose"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Android Developers Official",
            description:
                "Official Android development documentation and codelabs.",
            url: "https://developer.android.com",
            type: "Documentation",
        },
        {
            id: 2,
            title: "Kotlin Documentation",
            description: "Learn Kotlin programming language from scratch.",
            url: "https://kotlinlang.org/docs/home.html",
            type: "Documentation",
        },
    ],
    team: {
        lead: {
            name: "Vikram Joshi",
            role: "Android Development Lead",
            avatar: "/team/vikram.jpg",
            bio: "Android developer with 3+ years of experience in building production apps.",
            linkedin: "https://linkedin.com/in/vikramjoshi",
            github: "https://github.com/vikramjoshi",
            email: "vikram@gdgc.dev",
        },
        coLead: {
            name: "Asha Rao",
            role: "Android Development Co-Lead",
            avatar: "/team/asha.jpg",
            bio: "Kotlin enthusiast and UI/UX-focused Android engineer.",
            linkedin: "https://linkedin.com/in/asharao",
            github: "https://github.com/asharao",
            email: "asha@gdgc.dev",
        },
        members: [
            {
                name: "Neha Gupta",
                role: "Android Developer",
                avatar: "/team/neha.jpg",
                linkedin: "https://linkedin.com/in/nehagupta",
                github: "https://github.com/nehagupta",
            },
            {
                name: "Rohan Mehta",
                role: "Android Developer",
                avatar: "/team/rohan.jpg",
                linkedin: "https://linkedin.com/in/rohanmehta",
                github: "https://github.com/rohanmehta",
            },
        ],
    },
};

export default androidDomain;
