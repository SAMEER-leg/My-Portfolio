import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Abdul Qadir",
  role: "Full Stack Developer",
  bio: "I build end-to-end web products—solid backends, thoughtful APIs, and interfaces people actually enjoy using. Focused on clean architecture, performance, and shipping work that lasts.",
  profilePic: "/profile.png",
  whatsappNumber: "923293021285",
  whatsappDisplay: "03293021285",
  email: "abdulqadir12332190@gmail.com",
  projects: [
    {
      id: "1",
      title: "AI Powered Educational Platform",
      description: "Scalable AI-driven learning system with subject-based AI tutors, Stripe payments, and a fully customizable admin dashboard.",
      longDescription: "An advanced, scalable educational SaaS platform designed for schools, institutes, coaching centers, and independent educators to fully manage and monetize their own AI-powered learning ecosystem.",
      image: "/education_platform.png",
      techStack: ["MongoDB", "Authentication", "Stripe API", "AI Integration", "Admin Dashboard", "Role-Based Access"],
      whyMade: "Designed to bridge the gap between physical education and digital intelligence.",
      link: "https://education-web-front.vercel.app",
      purpose: "Built to empower educational institutions to launch and manage their own AI-driven learning platforms without needing technical expertise. This system allows full brand customization and monetization control from a centralized admin dashboard.",
      features: [
        { title: "Secure Authentication System", description: "Complete login & signup flow with protected routes and user-based access control." },
        { title: "Subject-Based AI Tutor System", description: "Dedicated AI tutors for every subject, trained to respond contextually and assist students." },
        { title: "Premium Access with Stripe", description: "Integrated Stripe API for secure subscription payments and locking exclusive materials." },
        { title: "Fully Customizable Admin Dashboard", description: "Advanced control panel for managing subjects, pricing plans, users, and branding." },
        { title: "Modular Page Structure", description: "Structured multi-page system (4–5 dynamic pages) built with a scalable architecture." }
      ]
    },
    {
      id: "2",
      title: "Code Zera – Software House Website",
      description: "A modern and clean software house website built to showcase services, projects, and company identity with smooth animations and a working contact form integration.",
      longDescription: "Code Zera is a professional software house website developed to represent a digital agency online. The focus was on clean UI, smooth user experience, and proper service presentation. It includes essential company sections like services, projects, about, and contact.",
      image: "/code_zera.png",
      techStack: ["React.js", "Custom CSS", "Node.js", "Nodemailer", "Responsive Design"],
      whyMade: "Designed to represent a digital agency online with a focus on clean UI and smooth user experience.",
      link: "https://codezyraa.vercel.app/",
      purpose: "To provide a professional online presence for a software house, showcase its portfolio, and collect client inquiries through a seamless contact system while maintaining modern branding.",
      features: [
        { title: "Modern UI Design", description: "Clean layout with smooth animations, professional typography, and responsive design for all devices." },
        { title: "Service & Project Showcase", description: "Dedicated sections for services, selected projects, and company identity to clarify agency's expertise." },
        { title: "Contact Form Integration", description: "Working contact form connected using Nodemailer to send client inquiries directly to company email." }
      ]
    },
    {
      id: "3",
      title: "NutriVision.ai – AI Food Analyzer",
      description: "An AI-powered nutrition analysis platform that scans food images, calculates calories and nutrients, and provides personalized dietary insights with chatbot assistance.",
      longDescription: "NutriVision.ai is an AI-powered web application built for analyzing food items using image recognition and AI integration. Users can scan food through their camera or upload an image, and the system instantly provides detailed nutritional analysis including calories, macros, vitamins, and health insights.",
      image: "/nutrivision.png",
      techStack: ["React.js", "Node.js", "MongoDB", "OpenAI API", "PWA", "Image Processing"],
      whyMade: "Developed for a freelance client as a smart health-tech solution to simplify nutrition tracking through AI.",
      link: "", // Coming soon
      purpose: "To provide smart food analysis through AI, personal nutrition tracking, and health awareness via an AI-based diet assistant.",
      features: [
        { title: "AI Image-Based Food Scanner", description: "Capture or upload food images for instant AI analysis of calories, macros, and vitamins." },
        { title: "Smart Nutrition Chatbot", description: "AI-powered assistant for diet recommendations, food benefits, and health improvement suggestions." },
        { title: "PWA & Progress Tracking", description: "Installable as an app with daily calorie tracking, nutritional history, and visual progress bars." }
      ]
    },
    {
      id: "4",
      title: "SportHive – AI Powered Sports Insights Platform",
      description: "A real-time sports platform featuring live & upcoming matches, AI-based predictions, VIP memberships, news system, and a fully controlled admin dashboard.",
      longDescription: "SportHive is a production-level sports web platform designed for football and basketball enthusiasts. It provides live and upcoming match listings, AI-assisted predictions, real-time sports news, VIP memberships with exclusive features, and a fully managed admin dashboard.",
      image: "/sporthive.png",
      techStack: ["React.js", "Node.js", "MongoDB", "Stripe API", "Sports News API", "AI Chatbot", "Admin Dashboard"],
      whyMade: "Built to provide a high-engagement, real-time sports experience with premium AI insights for passionate fans.",
      link: "", // Coming soon
      purpose: "Real-time sports engagement platform with a subscription-based premium model and AI-assisted sports analysis.",
      features: [
        { title: "Live & Upcoming Matches", description: "Real-time football and basketball match listings and upcoming fixtures." },
        { title: "AI Prediction & Chatbot", description: "AI-assisted match guidance and sports-related Q&A for better fan engagement." },
        { title: "VIP Membership & Admin", description: "Stripe-integrated subscription plans and a fully controlled admin dashboard for total site management." }
      ]
    },
    {
      id: "5",
      title: "HealthMate – AI Powered Health Assistant",
      description: "An AI-driven health platform that analyzes medical reports, tracks vital stats, and provides intelligent guidance using Gemini integration.",
      longDescription: "HealthMate is a hackathon-built AI-powered healthcare assistant designed to help users monitor their health, analyze medical reports, and receive AI-based medical guidance. The system combines health tracking, AI chatbot assistance, and intelligent report analysis using Gemini AI integration.",
      image: "/healthmate.png",
      techStack: ["React.js", "Node.js", "MongoDB", "Gemini AI API", "Authentication System", "Analytics Dashboard"],
      whyMade: "Developed during a Hackathon to showcase the potential of AI in medical document analysis and personalized health monitoring.",
      link: "", // Coming soon
      purpose: "Built to demonstrate AI healthcare integration, document analysis capability, and a comprehensive health tracking dashboard.",
      features: [
        { title: "Medical Report AI Analysis", description: "Upload PDF/Image reports for Gemini AI to extract medical insights and suggest specialist consultations." },
        { title: "Health Dashboard & Tracking", description: "Personalized monitoring of BP, sugar levels, and vital stats with visual analytics and trend history." },
        { title: "Intelligent AI Chatbot", description: "Gemini-powered health assistant for general medical guidance, lifestyle suggestions, and symptom-based advice." }
      ]
    }
  ],
  services: [
    {
      id: "1",
      title: "Full Stack Development",
      description: "Building scalable backend architectures and high-performance frontend applications with modern technologies.",
      icon: "Code2"
    },
    {
      id: "2",
      title: "Mobile Application Development",
      description: "Designing and developing responsive, user-focused mobile applications with seamless performance and clean architecture.",
      icon: "Smartphone"
    },
    {
      id: "3",
      title: "UI / UX Design",
      description: "Crafting intuitive, conversion-focused interfaces with pixel-perfect layouts and smooth user experiences.",
      icon: "Palette"
    },
    {
      id: "4",
      title: "AI Integration & Automation",
      description: "Implementing AI-powered systems, chatbot development, API integrations, and workflow automation for smarter digital products.",
      icon: "Bot"
    },
    {
      id: "5",
      title: "E-Commerce Systems",
      description: "Developing optimized online stores, scalable e-commerce infrastructures, and high-converting digital storefronts.",
      icon: "ShoppingCart"
    },
    {
      id: "6",
      title: "Shopify & WordPress Development",
      description: "Building customized, performance-driven Shopify and WordPress stores tailored for business growth.",
      icon: "Globe"
    },
    {
      id: "7",
      title: "Digital Marketing & Growth Systems",
      description: "Designing data-driven marketing strategies including social media, paid ads, and performance tracking systems.",
      icon: "TrendingUp"
    },
    {
      id: "8",
      title: "Motion Graphics & Creative Assets",
      description: "Creating engaging visual content and motion-based digital assets to elevate brand storytelling.",
      icon: "Video"
    },
    {
      id: "9",
      title: "Graphic Design & Branding",
      description: "Designing impactful visual identities, brand assets, and digital creatives aligned with modern aesthetics.",
      icon: "PenTool"
    },
    {
      id: "10",
      title: "Data Handling & Office Automation",
      description: "Advanced Excel, MS Office systems, reporting dashboards, and structured data management solutions.",
      icon: "BarChart3"
    },
    {
      id: "11",
      title: "Python Development (Learning & Expanding)",
      description: "Expanding into Python-based systems, automation scripts, backend tools, and machine learning foundations.",
      icon: "Terminal"
    },
    {
      id: "12",
      title: "LLM & Machine Learning Systems",
      description: "Exploring and developing intelligent systems using large language models and machine learning pipelines.",
      icon: "BrainCircuit"
    }
  ],
  experience: [
    {
      id: "1",
      role: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2025 - Present",
      description: "Working on independent projects and production-level web applications with a focus on AI integration and modern UI/UX. Pursuing the long-term goal of establishing a personal software house."
    },
    {
      id: "2",
      role: "Full Stack Developer Intern",
      company: "Code Zyra Software House",
      period: "3 Months",
      description: "Contributed to real-world software projects, refined frontend/backend skills, and learned industrial-standard deployment workflows."
    },
    {
      id: "3",
      role: "MERN & Full Stack Development (Certified)",
      company: "SMIT / HSIT",
      period: "2024 - 2025",
      description: "Completed an intensive certified training program, starting with the MERN stack and evolving into a comprehensive Full Stack Developer. Participated in a 12-hour Night Hackathon and built multiple production-ready prototypes."
    },
    {
      id: "4",
      role: "MS Office Automation",
      company: "Certified Course",
      period: "2023",
      description: "Successfully completed a certified MS Office course, mastering document management and office automation tools."
    }
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com", icon: "Github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" }
  ]
};
