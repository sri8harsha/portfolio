// Portfolio by Sri Harsha - Updated with fixed image paths
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  ChevronUp,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
  Brain,
  Lightbulb,
  Rocket,
  Star,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = [
    {
      title: "AI Product Photography Pipeline",
      subtitle: "Automated e-commerce photo generation using AI vision and workflow orchestration",
      description: "Production-ready automation system that transforms basic product images into professional e-commerce photography with human models. Built as a scalable n8n workflow processing hundreds of images daily.",
      technical: [
        "n8n workflow orchestration with Google Sheets integration",
        "GPT-4 Vision for intelligent product analysis and categorization",
        "OpenAI DALL-E 3 for high-quality image generation (1536x1024)",
        "Automated Google Drive storage with organized folder structure",
        "Batch processing with error handling and retry logic"
      ],
      business: [
        "Reduces photography costs by 85% ($200 → $30 per product shoot)",
        "Processes 50+ products in 30 minutes vs 2-3 days traditional method",
        "Consistent brand aesthetic across entire product catalog",
        "Currently processing 500+ images/month for 3 e-commerce clients"
      ],
      stack: [
        "n8n",
        "OpenAI API",
        "Google Workspace APIs",
        "Node.js",
        "REST APIs"
      ],
      image: "/photoshoot/airpods_input.png",
      color: "amber",
      link: "https://your-demo-link.com", // Replace with actual demo link
      github: "https://github.com/sri8harsha/product-photoshoot",
      caseStudy: "https://your-case-study-link.com", // Replace with actual case study link
      showcase: [
        {
          label: "AirPods",
          input: "/photoshoot/airpods_input.png",
          outputs: [
            "/photoshoot/airpods_output1.jpg",
            "/photoshoot/airpods_output2.jpg"
          ]
        },
        {
          label: "Bracelet",
          input: "/photoshoot/bracelet_input.png",
          outputs: [
            "/photoshoot/bracelet_output1.jpg",
            "/photoshoot/bracelet_output2.jpg",
            "/photoshoot/bracelet_output3.jpg"
          ]
        },
        {
          label: "Sunglasses",
          input: "/photoshoot/sunglasses_input.png",
          outputs: [
            "/photoshoot/sunglasses_output1.jpg",
            "/photoshoot/sunglasses_output2.jpg"
          ]
        }
      ]
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Keyboard navigation for gallery
  useEffect(() => {
    if (!galleryOpen) return

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          prevImage()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextImage()
          break
        case 'Escape':
          e.preventDefault()
          closeGallery()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [galleryOpen, galleryImages.length, currentImageIndex])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const openGallery = (images, startIndex = 0) => {
    setGalleryImages(images)
    setCurrentImageIndex(startIndex)
    setGalleryOpen(true)
  }

  const closeGallery = () => {
    setGalleryOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 text-slate-800 overflow-x-hidden">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-emerald-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              SK
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "projects", "about", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 font-medium ${
                    activeSection === item
                      ? "text-emerald-600 border-b-2 border-emerald-500"
                      : "text-slate-600 hover:text-emerald-600"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 text-slate-800">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            SRI HARSHA KOLUKULURI
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            AI Automation Engineer & Workflow Specialist
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-6">
            I architect intelligent automation systems that eliminate manual work and scale business operations. Specialized in n8n workflows, AI API integrations, and production-ready solutions that deliver measurable ROI.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Currently building AI-powered automation for businesses across e-commerce, marketing, and document processing.
          </p>
          {/* Metrics Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-xl shadow text-emerald-700 font-semibold text-lg">
              <span role="img" aria-label="rocket">🚀</span> 15+ Production Workflows Deployed
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-xl shadow text-emerald-700 font-semibold text-lg">
              <span role="img" aria-label="lightning">⚡</span> 200+ Hours Monthly Manual Work Eliminated
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-xl shadow text-emerald-700 font-semibold text-lg">
              <span role="img" aria-label="chart">📈</span> 75% Average Task Time Reduction
            </div>
            <div className="flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-xl shadow text-emerald-700 font-semibold text-lg">
              <span role="img" aria-label="money">💰</span> $50K+ Annual Savings Generated for Clients
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Innovative solutions that push the boundaries of what's possible
            </p>
          </motion.div>

          {/* Responsive grid that adapts to any number of projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Dialog key={index} open={modalOpen && selectedProject === index && !galleryOpen} onOpenChange={(open) => { 
                setModalOpen(open); 
                if (!open) setSelectedProject(null);
              }}>
                <DialogTrigger asChild>
                  <div onClick={() => { setSelectedProject(index); setModalOpen(true) }}>
                    <ProjectCard project={project} index={index} />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl w-full bg-white/90 rounded-2xl border-emerald-100 shadow-2xl p-0">
                  <div className="max-h-[80vh] overflow-y-auto p-8">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-slate-700 mb-4">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    {project.showcase ? (
                      <div className="space-y-12">
                        {project.showcase.map((item, i) => (
                          <div key={i}>
                            <div className="font-semibold text-emerald-700 mb-4 text-xl tracking-wide uppercase flex items-center gap-2">
                              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span> {item.label}
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                              <div className="flex-shrink-0 border-2 border-emerald-200 rounded-xl p-2 bg-white shadow-md cursor-pointer" onClick={() => openGallery([{ src: item.input, title: `${item.label} Input` }], 0)}>
                                <img src={item.input} alt="input" className="w-32 h-32 object-contain rounded-lg hover:scale-105 transition-transform duration-300" />
                                <div className="text-xs text-center mt-1 text-slate-500 font-medium">Input</div>
                              </div>
                              <div className="flex flex-wrap gap-4">
                                {item.outputs.map((out, j) => (
                                  <div key={j} className="border-2 border-emerald-100 rounded-xl p-2 bg-white shadow-sm cursor-pointer" onClick={() => openGallery(item.outputs.map((output, idx) => ({ src: output, title: `${item.label} Output ${idx + 1}` })), j)}>
                                    <img src={out} alt={`output ${j+1}`} className="w-32 h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                                    <div className="text-xs text-center mt-1 text-slate-500 font-medium">Output {j+1}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img src={project.image} alt={project.title} className="w-full h-64 object-contain rounded-xl border border-emerald-100 bg-white shadow mb-4 cursor-pointer" onClick={() => openGallery([{ src: project.image, title: project.title }], 0)} />
                    )}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.stack.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-8">
                      {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">
                          <ExternalLink className="w-5 h-5" /> Live / Docs
                        </a>
                      )}
                      {project.github && project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-800 rounded-xl font-semibold shadow hover:bg-slate-200 transition-all duration-300">
                          <Github className="w-5 h-5" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">About Me</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Started as a data analyst who got tired of watching teams do the same manual tasks every day. Now I specialize in building AI workflows that actually get deployed and used.<br/><br/>
              My approach: understand the business problem first, then build the most elegant technical solution. I work primarily with n8n for workflow automation, integrating various AI APIs to create end-to-end systems that non-technical teams can operate.<br/><br/>
              Most of my projects save companies 10-20 hours per week of manual work while improving output quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Skills</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Workflow Automation</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>n8n (Advanced) - 15+ production workflows</li>
                <li>Zapier, Make.com - Enterprise integrations</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8 mb-4">API Design & Integration</h3>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">AI Integration</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>OpenAI APIs (GPT-4, DALL-E, Whisper)</li>
                <li>Claude API, Groq API</li>
                <li>Prompt engineering & optimization</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Development Stack</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>Python (automation scripts, API backends)</li>
                <li>JavaScript/Node.js (custom n8n nodes)</li>
                <li>Google Apps Script (Sheets/Drive automation)</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-8 mb-4">Business Systems</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>Google Workspace automation</li>
                <li>CRM integrations (HubSpot, Salesforce)</li>
                <li>Database design & management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Metrics Section */}
      <section id="results" className="py-20 px-6 relative bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Results & Metrics</h2>
            <ul className="list-disc list-inside text-xl text-slate-700 mx-auto max-w-2xl">
              <li>Automated 200+ hours of monthly manual work across 5 companies</li>
              <li>Reduced average task completion time by 75%</li>
              <li>Deployed 15+ AI workflows currently running in production</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <p className="text-xl text-slate-600">Ready to bring your AI vision to life?</p>
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-white/60 rounded-2xl border border-emerald-200">
                <div className="flex items-center justify-center gap-3 text-emerald-700">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:sri0harsha@gmail.com" className="text-lg font-medium hover:text-emerald-800 transition-colors">
                    sri0harsha@gmail.com
                  </a>
                </div>
                <p className="text-sm text-slate-600 text-center mt-2">Email for direct communication</p>
                <div className="mt-4">
                  <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold shadow hover:from-emerald-600 hover:to-teal-700 transition-all duration-300">Book a Consultation</a>
                </div>
              </div>
              
              <div className="p-6 bg-white/60 rounded-2xl border border-blue-200">
                <div className="flex items-center justify-center gap-3 text-blue-700">
                  <Linkedin className="w-5 h-5" />
                  <a href="https://linkedin.com/in/sri-harsha-3b0401170" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-blue-800 transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
                <p className="text-sm text-slate-600 text-center mt-2">Available for projects, collaborations, and consultations</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100 shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-white/50 border-emerald-200 text-slate-800 placeholder:text-slate-500 focus:border-emerald-400 transition-colors duration-300 h-12 rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/50 border-emerald-200 text-slate-800 placeholder:text-slate-500 focus:border-emerald-400 transition-colors duration-300 h-12 rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-white/50 border-emerald-200 text-slate-800 placeholder:text-slate-500 focus:border-emerald-400 transition-colors duration-300 resize-none rounded-xl"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex justify-center gap-6 mb-6">
              <motion.a
                href="https://linkedin.com/in/sri-harsha-3b0401170"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 text-emerald-600" />
              </motion.a>
              <motion.a
                href="https://github.com/sri8harsha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6 text-slate-600" />
              </motion.a>
            </div>
            <p className="text-slate-500">© 2024 Sriharsha Kolukuluri. Crafted with passion and innovation.</p>
          </motion.div>
        </div>
      </footer>

      {/* Image Gallery Modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/95 flex items-center justify-center p-6">
          {/* Background overlay */}
          <div 
            className="absolute inset-0"
            onClick={closeGallery}
          />
          
          {/* Gallery content */}
          <div className="relative max-w-5xl max-h-full w-full overflow-y-auto z-10 pointer-events-auto">
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl p-8 shadow-2xl pointer-events-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={galleryImages[currentImageIndex]?.src} 
                  alt={galleryImages[currentImageIndex]?.title}
                  className="w-full max-h-[70vh] object-contain pointer-events-auto"
                />
                {/* Subtle overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none"></div>
              </div>
              
              {/* Navigation buttons */}
              {galleryImages.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    type="button"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full p-3 text-white transition-all duration-300 shadow-lg hover:shadow-white/30 hover:scale-105 border border-white/30 hover:border-white/50 z-30 group pointer-events-auto"
                  >
                    <ChevronDown className="w-4 h-4 transform rotate-90 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full p-3 text-white transition-all duration-300 shadow-lg hover:shadow-white/30 hover:scale-105 border border-white/30 hover:border-white/50 z-30 group pointer-events-auto"
                  >
                    <ChevronDown className="w-4 h-4 transform -rotate-90 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </>
              )}
              
              {/* Close button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeGallery();
                }}
                type="button"
                className="absolute top-4 right-4 bg-white/10 hover:bg-red-500/80 backdrop-blur-lg rounded-full p-2.5 text-white transition-all duration-300 shadow-lg hover:shadow-red-500/40 hover:scale-105 border border-white/30 hover:border-red-400/50 z-40 group pointer-events-auto"
              >
                <X className="w-4 h-4 group-hover:scale-110 group-hover:rotate-90 transition-all duration-200" />
              </button>
            </div>
            
            {/* Image info - Below the image */}
            <div className="mt-8 bg-gradient-to-br from-white/95 via-white/90 to-slate-50/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 pointer-events-auto">
              <h3 className="font-bold text-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-tight">{galleryImages[currentImageIndex]?.title}</h3>
              {galleryImages[currentImageIndex]?.description && (
                <p className="text-slate-700 leading-relaxed mb-6 text-lg font-light">{galleryImages[currentImageIndex]?.description}</p>
              )}
              <div className="flex justify-between items-center">
                <div className="px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full text-white font-semibold text-sm shadow-xl backdrop-blur-sm border border-white/20">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></span>
                    Image {currentImageIndex + 1} of {galleryImages.length}
                  </span>
                </div>
                {galleryImages.length > 1 && (
                  <div className="flex gap-3">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg hover:scale-125 z-10 pointer-events-auto ${
                          idx === currentImageIndex 
                            ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 shadow-emerald-500/50 ring-2 ring-white/50' 
                            : 'bg-slate-300 hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-500 shadow-slate-400/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  const colorMap = {
    emerald: "from-emerald-500 to-emerald-600",
    teal: "from-teal-500 to-teal-600",
    cyan: "from-cyan-500 to-cyan-600",
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
        <div className="relative overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${colorMap[project.color]} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}
          />
          <div className="absolute top-4 right-4 flex gap-2">
            {project.link && project.link !== "#" && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <ExternalLink className="w-5 h-5 text-emerald-600" />
              </motion.a>
            )}
            {project.github && project.github !== "#" && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Github className="w-5 h-5 text-slate-700" />
              </motion.a>
            )}
          </div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.stack.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
