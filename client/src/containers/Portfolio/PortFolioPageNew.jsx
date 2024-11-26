import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  Code,
  Server,
  Database,
  Brush,
  Zap,
  Globe,
  Shield,
  Cpu,
  Terminal,
  Rocket,
  PieChart,
} from "lucide-react";

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      className="fixed inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-size-200 opacity-20 z-[-1]"
    />
  );
};

// Animated Skill Card with Interactive Effects
const SkillCard = ({ icon: Icon, title, skills, color }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, perspective: 1000 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: `0 20px 40px rgba(0,0,0,0.2)`,
      }}
      className={`relative overflow-hidden rounded-2xl p-6 ${color} text-white shadow-2xl transform transition-all duration-300`}
    >
      <motion.div
        className="absolute inset-0 opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, ${color.replace(
            "bg-",
            "bg-"
          )} 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10 flex items-center mb-4">
        <Icon className="mr-4" size={40} />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1 }}
        className="space-y-2"
      >
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center text-sm"
          >
            <Zap className="mr-2" size={16} />
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

// Main Portfolio Component
const PortfolioNewPage = () => {
  const [activeSection, setActiveSection] = useState("skills");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skillSections = [
    {
      icon: Code,
      title: "Frontend Wizardry",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      icon: Server,
      title: "Backend Alchemy",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
      skills: ["Node.js", "Python", "GraphQL", "Microservices", "Express"],
    },
    {
      icon: Database,
      title: "Data Sorcery",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Data Modeling", "ORM"],
    },
    {
      icon: Rocket,
      title: "DevOps Mastery",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
    },
    {
      icon: Shield,
      title: "Security Craft",
      color: "bg-gradient-to-br from-purple-500 to-blue-600",
      skills: [
        "Cybersecurity",
        "Auth Mechanisms",
        "Penetration Testing",
        "Encryption",
      ],
    },
    {
      icon: Globe,
      title: "Full Stack Innovation",
      color: "bg-gradient-to-br from-teal-500 to-green-600",
      skills: [
        "System Architecture",
        "Cloud Native",
        "Scalable Solutions",
        "Performance",
      ],
    },
  ];

  const projectSections = [
    {
      name: "AI Collaboration Platform",
      description: "Revolutionizing team productivity with AI-powered insights",
      technologies: ["React", "GPT-4", "WebSockets", "Blockchain"],
    },
    {
      name: "Decentralized Finance Hub",
      description: "Secure, transparent financial ecosystem",
      technologies: ["Solidity", "Web3", "React", "Ethereum"],
    },
    {
      name: "IoT Smart City Management",
      description: "Intelligent urban infrastructure solution",
      technologies: ["Python", "Machine Learning", "Raspberry Pi", "Docker"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-purple-100 via-pink-200 via-blue-100 via-green-100 to-yellow-100 bg-size-400 opacity-20 z-[-1]"
    >
      <AnimatedBackground />
      <motion.button
        onClick={() => window.history.back()}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-pink-500 text-white border border-white/20 hover:bg-gray/20 transition-colors rounded-full"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </motion.button>

      {/* Floating Interactive Cursor Effect */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="fixed pointer-events-none z-50"
      >
        <div className="w-8 h-8 bg-white/20 rounded-full blur-lg absolute -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto p-8">
        {/* Animated Header */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
              transition: { repeat: Infinity, duration: 3, ease: "linear" },
            }}
          >
            Md Saif Ali
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-light text-black/80"
          >
            Crafting Digital Experiences | Full Stack Developer
          </motion.p>
        </motion.header>

        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          {["skills", "projects", "about"].map((section) => (
            <motion.button
              key={section}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-3 rounded-full text-lg transition-all bg-purple-700 text-white
               
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </motion.nav>

        {/* Animated Content Sections */}
        <AnimatePresence mode="wait">
          {activeSection === "skills" && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {skillSections.map((section, index) => (
                <SkillCard key={index} {...section} />
              ))}
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {projectSections.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl"
                >
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {project.name}
                  </h3>
                  <p className="text-black/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.section>
          )}

          {activeSection === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                About My Journey
              </h2>
              <p className="text-xl text-black/80 max-w-4xl mx-auto leading-relaxed">
                A passionate technologist bridging creativity and code. With a
                holistic approach to software development, I transform complex
                challenges into elegant, user-centric solutions that push the
                boundaries of what's possible.
              </p>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PortfolioNewPage;
