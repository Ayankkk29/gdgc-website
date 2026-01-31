// Machine Learning Domain Data
import { Cpu, Code, BookOpen, Cloud, BarChart2, Zap } from "lucide-react";

const mlDomain = {
    id: "mlTeam",
    name: "Machine Learning",
    shortName: "ML/AI",
    icon: Cpu,
    color: "#FBBC04",
    description:
        "Explore the world of artificial intelligence and machine learning with hands-on projects.",
    skills: [
        "Python Programming",
        "NumPy & Pandas",
        "TensorFlow & PyTorch",
        "Data Visualization",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Model Deployment",
    ],
    tools: [
        { name: "Python", icon: Code },
        { name: "TensorFlow", icon: Zap },
        { name: "Jupyter", icon: BookOpen },
        { name: "Google Colab", icon: Cloud },
        { name: "Kaggle", icon: BarChart2 },
    ],
    projects: [
        {
            id: 1,
            title: "Sentiment Analysis Tool",
            description:
                "NLP-based tool for analyzing sentiment in social media posts.",
            image: "/projects/sentiment-tool.png",
            technologies: ["Python", "TensorFlow", "BERT"],
            githubUrl: "https://github.com/gdgc/sentiment-analysis",
            liveUrl: "https://sentiment.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Image Classification API",
            description:
                "REST API for classifying images using deep learning models.",
            image: "/projects/image-classifier.png",
            technologies: ["Python", "FastAPI", "PyTorch"],
            githubUrl: "https://github.com/gdgc/image-classifier",
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Introduction to Neural Networks",
            excerpt:
                "Understanding the fundamentals of neural networks and deep learning.",
            author: "Dr. Meera Iyer",
            authorAvatar: "/avatars/meera.jpg",
            date: "2025-11-25",
            readTime: "12 min read",
            url: "/blogs/neural-networks-intro",
            tags: ["Machine Learning", "Deep Learning", "AI"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "TensorFlow Documentation",
            description: "Official TensorFlow tutorials and guides.",
            url: "https://www.tensorflow.org/learn",
            type: "Documentation",
        },
        {
            id: 2,
            title: "Google AI Blog",
            description: "Latest research and updates from Google AI.",
            url: "https://ai.googleblog.com",
            type: "Blog",
        },
    ],
    team: {
        lead: {
            name: "Dr. Meera Iyer",
            role: "Machine Learning Lead",
            avatar: "/team/meera.jpg",
            bio: "PhD researcher in AI with focus on NLP and computer vision.",
            linkedin: "https://linkedin.com/in/meeraiyer",
            github: "https://github.com/meeraiyer",
            email: "meera@gdgc.dev",
        },
        coLead: {
            name: "Karan Mehta",
            role: "Machine Learning Co-Lead",
            avatar: "/team/karan.jpg",
            bio: "ML engineer working on model deployment and MLOps.",
            linkedin: "https://linkedin.com/in/karanmehta",
            github: "https://github.com/karanmehta",
            email: "karan@gdgc.dev",
        },
        members: [
            {
                name: "Aditya Sharma",
                role: "ML Engineer",
                avatar: "/team/aditya.jpg",
                linkedin: "https://linkedin.com/in/adityasharma",
                github: "https://github.com/adityasharma",
            },
            {
                name: "Pooja Nair",
                role: "Data Scientist",
                avatar: "/team/pooja.jpg",
                linkedin: "https://linkedin.com/in/poojanair",
                github: "https://github.com/poojanair",
            },
        ],
    },
};

export default mlDomain;
