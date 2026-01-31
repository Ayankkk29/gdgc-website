// Blockchain Domain Data
import { Link, FileText, Wrench, Shield, Zap } from "lucide-react";

const blockchainDomain = {
    id: "blockChainTeam",
    name: "Blockchain",
    shortName: "Blockchain",
    icon: Link,
    color: "#EA4335",
    description:
        "Dive into decentralized technologies, smart contracts, and Web3 development.",
    skills: [
        "Solidity Programming",
        "Smart Contracts",
        "Ethereum & EVM",
        "Web3.js / Ethers.js",
        "DeFi Protocols",
        "NFT Development",
        "Hardhat & Truffle",
        "IPFS & Decentralized Storage",
    ],
    tools: [
        { name: "Solidity", icon: FileText },
        { name: "Hardhat", icon: Wrench },
        { name: "MetaMask", icon: Shield },
        { name: "Remix IDE", icon: Wrench },
        { name: "OpenZeppelin", icon: Shield },
    ],
    projects: [
        {
            id: 1,
            title: "GDGC NFT Collection",
            description:
                "Exclusive NFT collection for community members and event participants.",
            image: "/projects/nft-collection.png",
            technologies: ["Solidity", "IPFS", "React"],
            githubUrl: "https://github.com/gdgc/nft-collection",
            liveUrl: "https://nft.gdgc.dev",
            featured: true,
        },
        {
            id: 2,
            title: "Decentralized Voting System",
            description:
                "Transparent and secure voting system using blockchain technology.",
            image: "/projects/voting-dapp.png",
            technologies: ["Solidity", "Hardhat", "Next.js"],
            githubUrl: "https://github.com/gdgc/voting-dapp",
            liveUrl: null,
            featured: false,
        },
    ],
    blogs: [
        {
            id: 1,
            title: "Getting Started with Web3 Development",
            excerpt:
                "A beginner's guide to building decentralized applications.",
            author: "Karan Malhotra",
            authorAvatar: "/avatars/karan.jpg",
            date: "2025-12-05",
            readTime: "9 min read",
            url: "/blogs/web3-getting-started",
            tags: ["Blockchain", "Web3", "Ethereum"],
        },
    ],
    articles: [
        {
            id: 1,
            title: "Ethereum Developer Documentation",
            description:
                "Official Ethereum development resources and tutorials.",
            url: "https://ethereum.org/developers",
            type: "Documentation",
        },
        {
            id: 2,
            title: "Solidity by Example",
            description: "Learn Solidity through practical examples.",
            url: "https://solidity-by-example.org",
            type: "Learning Resource",
        },
    ],
    team: {
        lead: {
            name: "Karan Malhotra",
            role: "Blockchain Lead",
            avatar: "/team/karan.jpg",
            bio: "Web3 developer building the future of decentralized applications.",
            linkedin: "https://linkedin.com/in/karanmalhotra",
            github: "https://github.com/karanmalhotra",
            email: "karan@gdgc.dev",
        },
        coLead: {
            name: "Nisha Kapoor",
            role: "Blockchain Co-Lead",
            avatar: "/team/nisha.jpg",
            bio: "Blockchain developer with a focus on smart contracts and security.",
            linkedin: "https://linkedin.com/in/nishakapoor",
            github: "https://github.com/nishakapoor",
            email: "nisha@gdgc.dev",
        },
        members: [
            {
                name: "Shruti Kapoor",
                role: "Smart Contract Developer",
                avatar: "/team/shruti.jpg",
                linkedin: "https://linkedin.com/in/shrutikapoor",
                github: "https://github.com/shrutikapoor",
            },
        ],
    },
};

export default blockchainDomain;
