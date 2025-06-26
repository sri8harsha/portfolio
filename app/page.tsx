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
      title: "Product Photoshoot",
      description:
        "An automated workflow that transforms product images into professional product photography using AI. This project demonstrates before-and-after results for various products, showcasing the power of automated image enhancement and human model integration. [View on GitHub](https://github.com/sri8harsha/product-photoshoot)",
      tags: ["AI", "Automation", "Image Processing", "n8n", "OpenAI", "Google Sheets"],
      image: "/photoshoot/airpods_input.png",
      color: "amber",
      link: "https://github.com/sri8harsha/product-photoshoot",
      github: "https://github.com/sri8harsha/product-photoshoot",
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
    {
      title: "Brandkit",
      description:
        "Complete branding solution for businesses, startups, and marketing agencies. Perfect for creating product launches, social media campaigns, email marketing, and brand identity materials. Simply enter your campaign details and get professional advertisement copy, social media posts, email campaigns, product descriptions, and visual assets - all generated with AI in one click. Ideal for small businesses without marketing teams, freelancers, and anyone needing quick, professional branding materials.",
      tags: ["Python", "AI", "GPT-4", "GPT Image 1", "Branding", "FastAPI", "Gradio"],
      image: "/Brandkit/brandkit_visual_8.png",
      color: "cyan",
      link: "https://github.com/sri8harsha/Brandkit",
      github: "https://github.com/sri8harsha/Brandkit",
      demo: [
        {
          image: "/Brandkit/UI1.jpg",
          title: "Simple Interface",
          description: "Clean and easy-to-use dashboard. Navigate through different sections to create your brand campaigns without any complexity."
        },
        {
          image: "/Brandkit/UI2.jpg",
          title: "Ready to Use",
          description: "Simple layout that works on any device. Everything is organized and ready for you to start creating your brand materials."
        },
        {
          image: "/Brandkit/Details.jpg",
          title: "Step 1: Enter Your Details",
          description: "Fill in your campaign details here - product name, target audience, goals, and any specific requirements. Then click 'Generate' to create all your branding materials instantly."
        },
        {
          image: "/Brandkit/AC.jpg",
          title: "Get Advertisement Copy",
          description: "Receive professional ad copy ready to use for your campaigns. Perfect for Google Ads, Facebook Ads, or any marketing materials."
        },
        {
          image: "/Brandkit/Product.jpg",
          title: "Product Descriptions & Taglines",
          description: "Get catchy taglines and detailed product descriptions that sell. Use these for your website, product pages, or marketing brochures."
        },
        {
          image: "/Brandkit/SM.jpg",
          title: "Social Media Posts",
          description: "Ready-to-post social media content with hashtags. Perfect for Instagram, LinkedIn, Twitter, and Facebook to promote your brand."
        },
        {
          image: "/Brandkit/Email.jpg",
          title: "Email Campaigns",
          description: "Professional email templates for your marketing campaigns. Ready to send to your customers with engaging subject lines and content."
        },
        {
          image: "/Brandkit/brandkit_visual_8.png",
          title: "Visual Brand Assets",
          description: "AI-generated posters and visual content using GPT Image 1. Get professional-looking graphics that match your brand and campaign."
        }
      ]
    },
    {
      title: "LLM-Powered Document Assistant",
      description:
        "An AI-powered document processing application that enables users to upload PDF documents and interact with them through a natural language chat interface. Built with Python and modern AI frameworks, this tool provides intelligent document summarization, fast PDF processing, and real-time AI-powered insights using LLMs. Features a clean, intuitive UI built with Gradio for seamless user experience.",
      tags: ["Python", "LLM", "AI", "Document Processing", "Gradio", "LangChain"],
      image: "/document-assistant/demo1.jpg",
      color: "emerald",
      link: "https://github.com/sri8harsha/Document-Assistant",
      github: "https://github.com/sri8harsha/Document-Assistant",
      demo: [
        {
          image: "/document-assistant/demo1.jpg",
          title: "Intuitive User Interface",
          description: "Clean and modern Gradio-based interface designed for seamless user experience. The dashboard provides easy access to all document processing features with an intuitive layout that makes AI-powered document analysis accessible to everyone."
        },
        {
          image: "/document-assistant/demo2.jpg",
          title: "PDF Document Upload",
          description: "Effortlessly upload PDF documents through the drag-and-drop interface. The system supports various document formats and automatically prepares files for AI processing with built-in validation and optimization."
        },
        {
          image: "/document-assistant/demo3.jpg",
          title: "AI Document Processing & Summary",
          description: "Click 'Process Document' to activate advanced LLM analysis. The AI extracts key information, generates comprehensive summaries, and structures the content for intelligent querying - all powered by state-of-the-art language models."
        },
        {
          image: "/document-assistant/demo4.jpg",
          title: "Natural Language Queries",
          description: "Ask questions about your document using natural language. The intelligent chatbot interface allows you to query specific information, request clarifications, or explore document contents through conversational AI."
        },
        {
          image: "/document-assistant/demo5.jpg",
          title: "Intelligent AI Responses",
          description: "Receive accurate, context-aware answers powered by LLM technology. The AI provides detailed responses, cites relevant document sections, and offers insights that help you understand and utilize your documents more effectively."
        }
      ]
    },
    {
      title: "Image Reader",
      description:
        "A Python-based tool for reading and processing images. The project includes scripts for image decoding and manipulation, making it useful for various image processing tasks.",
      tags: ["Python", "Image Processing"],
      image: "/placeholder.svg?height=400&width=600",
      color: "teal",
      link: "https://github.com/sri8harsha/Image-reader",
      github: "https://github.com/sri8harsha/Image-reader",
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
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <motion.div
          className="text-center z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              SRI HARSHA
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              KOLUKULURI
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Brain className="w-8 h-8 text-emerald-500" />
              </motion.div>
              <p className="text-2xl md:text-3xl text-slate-700 font-light">AI Innovator & Creative Developer</p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-8 h-8 text-amber-500" />
              </motion.div>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              I build AI tools that businesses actually use. Specializing in practical automation, intelligent workflows, and user-friendly AI solutions. My projects don't just showcase technology - they solve real problems and deliver measurable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-2xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </motion.div>
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
                    ) : project.demo ? (
                      <div className="space-y-8">
                        {project.demo.map((step, i) => (
                          <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0">
                              <div className="relative cursor-pointer" onClick={() => openGallery(project.demo.map(s => ({ src: s.image, title: s.title, description: s.description })), i)}>
                                <img src={step.image} alt={step.title} className="w-48 h-32 object-cover rounded-xl border-2 border-emerald-100 shadow-md hover:shadow-lg transition-shadow duration-300" />
                              </div>
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white font-semibold text-sm">
                                  {i + 1}
                                </span>
                                <h4 className="text-lg font-semibold text-emerald-700">{step.title}</h4>
                              </div>
                              <p className="text-slate-600 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img src={project.image} alt={project.title} className="w-full h-64 object-contain rounded-xl border border-emerald-100 bg-white shadow mb-4 cursor-pointer" onClick={() => openGallery([{ src: project.image, title: project.title }], 0)} />
                    )}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag, tagIndex) => (
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          {/* Side by Side Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Auto-scrolling Story Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-emerald-50/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
                {/* Floating background elements */}
                <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
                
                {/* Scrollable content container */}
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-emerald-100 shadow-xl h-[500px] overflow-y-auto group">
                  <div className="p-6 space-y-8">
                    {/* Main quote */}
                    <div className="text-center mb-12">
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-tight">
                        "I turn AI complexity into human simplicity"
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto"></div>
                    </div>

                    {/* Flowing paragraphs */}
                    <div className="space-y-8">
                      <p className="text-lg text-slate-700 leading-relaxed text-center font-light">
                        My path started with a revelation: the most sophisticated technology should feel effortless to those who need it most. Today, I transform cutting-edge artificial intelligence into tools that work exactly how people expect them to intuitively, reliably, and without friction.
                      </p>
                      
                      <p className="text-lg text-slate-700 leading-relaxed text-center font-light">
                        The moment that defines my work isn't when code compiles or models converge but when someone who's never touched AI accomplishes something extraordinary. When small businesses compete with giants, when creative ideas flow without technical barriers, when powerful capabilities become as accessible as turning on a light.
                      </p>
                      
                      <p className="text-lg text-slate-700 leading-relaxed text-center font-light">
                        I specialize in the alchemy of making complex things simple. At the intersection of machine intelligence and human experience, I craft solutions that don't just work but feel inevitable. Each system I build bridges the gap between what's technically possible and what's practically useful.
                      </p>

                      {/* Vision statement */}
                      <div className="text-center mt-12 mb-8">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full px-6 py-3 mb-6 shadow-lg">
                          <Star className="w-4 h-4 text-white" />
                          <span className="text-white font-semibold">My Vision</span>
                        </div>
                        <p className="text-xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight mb-4">
                          A world where AI enhances human capability without demanding technical expertise
                        </p>
                        <p className="text-slate-600 leading-relaxed font-light">
                          Where innovation isn't limited by coding skills or corporate budgets, but only by imagination itself.
                        </p>
                      </div>

                      {/* Additional content for scrolling */}
                      <div className="space-y-8 mt-16">
                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full px-6 py-3 mb-6 shadow-lg">
                            <Lightbulb className="w-4 h-4 text-white" />
                            <span className="text-white font-semibold">My Approach</span>
                          </div>
                          <p className="text-lg text-slate-700 leading-relaxed text-center font-light">
                            Every project begins with understanding the human need, not the technical possibility. I believe the best AI solutions are invisible to the end user and just work seamlessly, integrating into existing workflows and enhancing productivity without adding complexity.
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full px-6 py-3 mb-6 shadow-lg">
                            <Rocket className="w-4 h-4 text-white" />
                            <span className="text-white font-semibold">Impact Focus</span>
                          </div>
                          <p className="text-lg text-slate-700 leading-relaxed text-center font-light">
                            From automating product photography for e-commerce stores to creating intelligent document assistants that understand context, my work bridges the gap between cutting-edge AI capabilities and real-world business needs. Each solution is designed to empower users, not overwhelm them.
                          </p>
                        </div>

                        {/* Extra spacing */}
                        <div className="h-32"></div>
                      </div>
                    </div>
                  </div>
                  

                </div>
              </div>
            </motion.div>

            {/* Enhanced Expertise Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-emerald-100 shadow-xl h-[500px] overflow-y-auto">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">Core Expertise</h4>
                  <p className="text-slate-600 text-sm">Technologies & Skills That Drive Innovation</p>
                </div>
                
                                 <div className="space-y-4">
                   <motion.div
                     className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-emerald-100 rounded-lg">
                       <Brain className="w-5 h-5 text-emerald-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">Language Models & Chat</h5>
                       <p className="text-slate-600 text-xs">Claude, GPT-4, Grok, Groq, DeepSeek, Chatterbox</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-purple-100 rounded-lg">
                       <Sparkles className="w-5 h-5 text-purple-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">Image Generation & AI Art</h5>
                       <p className="text-slate-600 text-xs">Midjourney, DALL-E, Diffusion Models, ComfyUI, DreamBooth</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl border border-pink-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-pink-100 rounded-lg">
                       <Star className="w-5 h-5 text-pink-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">Voice & Audio AI</h5>
                       <p className="text-slate-600 text-xs">ElevenLabs, Wav2Lip, Voice Cloning, Audio Synthesis</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl border border-orange-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-orange-100 rounded-lg">
                       <Rocket className="w-5 h-5 text-orange-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">No-Code Automation</h5>
                       <p className="text-slate-600 text-xs">n8n, Zapier, Make, Pabbly Connect, Integromat</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-blue-100 rounded-lg">
                       <Lightbulb className="w-5 h-5 text-blue-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">No-Code App Development</h5>
                       <p className="text-slate-600 text-xs">Bubble.io, FlutterFlow, Webflow, Adalo, Glide</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl border border-teal-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-teal-100 rounded-lg">
                       <Brain className="w-5 h-5 text-teal-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">API Integration & Services</h5>
                       <p className="text-slate-600 text-xs">OpenAI APIs, Stripe, Webhooks, REST, GraphQL</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-amber-100 rounded-lg">
                       <Lightbulb className="w-5 h-5 text-amber-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">Document & Data Processing</h5>
                       <p className="text-slate-600 text-xs">PDF analysis, OCR, Text extraction, Data parsing</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl border border-indigo-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-indigo-100 rounded-lg">
                       <Rocket className="w-5 h-5 text-indigo-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">E-commerce & Marketing</h5>
                       <p className="text-slate-600 text-xs">Product photography, Copywriting, Brand assets</p>
                     </div>
                   </motion.div>

                   <motion.div
                     className="flex items-center gap-3 p-3 bg-cyan-50 rounded-xl border border-cyan-100/50"
                     whileHover={{ x: 8, scale: 1.02 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-2 bg-cyan-100 rounded-lg">
                       <Star className="w-5 h-5 text-cyan-600" />
                     </div>
                     <div>
                       <h5 className="font-semibold text-slate-800 text-sm">Workflow Optimization</h5>
                       <p className="text-slate-600 text-xs">Process automation, Business intelligence, Analytics</p>
                     </div>
                   </motion.div>
                 </div>

                {/* Vision highlight at bottom */}
                <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span className="text-amber-700 font-semibold text-sm">Mission</span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Making powerful AI accessible to everyone, regardless of technical background
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
            <div className="mt-8 p-6 bg-white/60 rounded-2xl border border-emerald-200">
              <div className="flex items-center justify-center gap-3 text-emerald-700">
                <Mail className="w-5 h-5" />
                <a href="mailto:sri0harsha@gmail.com" className="text-lg font-medium hover:text-emerald-800 transition-colors">
                  sri0harsha@gmail.com
                </a>
              </div>
              <p className="text-sm text-slate-600 text-center mt-2">Available for projects, collaborations, and consultations</p>
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
                href="#"
                className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6 text-emerald-600" />
              </motion.a>
              <motion.a
                href="#"
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
            {project.tags.map((tag, tagIndex) => (
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
