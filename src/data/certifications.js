import aiFundamentalsImg from '../assets/certificates/ai-fundamentals.jpg';
import deepLearningImg from '../assets/certificates/deep-learning-tensorflow.jpg';
import rdbmsImg from '../assets/certificates/rdbms-ibm.jpg';
import lifelongImg from '../assets/certificates/lifelong-professional-skills.jpg';
import projMgmtImg from '../assets/certificates/project-management-fundamentals.jpg';

export const certifications = [
  {
    id: "cert-ai-fundamentals",
    name: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    issued: "17 July 2026",
    verificationUrl: "https://www.credly.com/go/c7qBD4ts",
    image: aiFundamentalsImg,
    skills: ["Artificial Intelligence", "AI Fundamentals", "Machine Learning", "Generative AI"],
    category: "AI / ML",
    featured: true,
    badgeText: "IBM Credly Verified"
  },
  {
    id: "cert-deep-learning",
    name: "Deep Learning with TensorFlow",
    courseCode: "ML0120EN",
    provider: "IBM Developer Skills Network",
    issuedBy: "Etrain Education",
    issuer: "IBM Skills Network",
    issued: "26 March 2026",
    verificationUrl: "https://courses.etrain.skillsnetwork.site/certificates/065899605d82469cb114cd02d14becde",
    image: deepLearningImg,
    skills: ["Deep Learning", "TensorFlow", "Machine Learning", "Artificial Intelligence", "Neural Networks"],
    category: "AI / ML",
    featured: true,
    badgeText: "IBM Verified Course"
  },
  {
    id: "cert-rdbms",
    name: "RDBMS",
    courseCode: "CEDBMSQ1IN",
    provider: "IBMCE",
    issuedBy: "IBM Career Education Program",
    issuer: "IBM Career Education",
    issued: "12 February 2024",
    credentialId: "0bd73b1fca3f48bdb1e722ce6d63aa40",
    verificationUrl: "https://courses.ibmcep.cognitiveclass.ai/certificates/0bd73b1fca3f48bdb1e722ce6d63aa40",
    image: rdbmsImg,
    skills: ["RDBMS", "DBMS", "SQL", "Database Management", "Data Management"],
    category: "Database",
    featured: true,
    badgeText: "IBM Career Education"
  },
  {
    id: "cert-lifelong-skills",
    name: "Lifelong Professional Skills",
    issuer: "IBM SkillsBuild",
    issued: "18 July 2026",
    verificationUrl: "https://www.credly.com/go/3c4lnFVY",
    image: lifelongImg,
    skills: ["Communication", "Collaboration", "Adaptability", "Problem Solving", "Professional Development"],
    category: "Professional",
    featured: false,
    badgeText: "IBM Credly Verified"
  },
  {
    id: "cert-project-management",
    name: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    issued: "18 July 2026",
    verificationUrl: "https://www.credly.com/go/IxeIDahM",
    image: projMgmtImg,
    skills: ["Project Management", "Project Planning", "Risk Management", "Communication", "Team Collaboration"],
    category: "Project Management",
    featured: false,
    badgeText: "IBM Credly Verified"
  }
];

export const certCategories = [
  "All",
  "AI / ML",
  "Data Science",
  "Database",
  "Professional",
  "Project Management"
];
