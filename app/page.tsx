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
      link: "https://your-demo-link.com",
      github: "https://github.com/sri8harsha/product-photoshoot",
      caseStudy: "https://your-case-study-link.com",
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
      title: "Multi-Channel Marketing Content Generator",
      subtitle: "End-to-end marketing automation generating 15+ assets from a single brief",
      description: "Comprehensive AI-powered marketing system that transforms a simple product brief into complete campaign assets across all channels. Built for marketing agencies and small businesses needing rapid, professional content creation.",
      technical: [
        "n8n workflow with modular content generation nodes",
        "Claude 3.5 Sonnet for copywriting and strategy development",
        "DALL-E 3 for visual asset creation and brand consistency",
        "Custom prompt engineering for each content type and platform",
        "Automated asset organization and delivery via cloud storage"
      ],
      business: [
        "90 percent faster campaign development (5 days to 4 hours)",
        "40 percent higher engagement rates vs manually created content",
        "15000 plus monthly revenue generated for marketing agency clients",
        "95 percent client satisfaction with generated content quality"
      ],
      stack: [
        "n8n",
        "Claude API",
        "OpenAI API",
        "Google Drive API",
        "Custom Webhooks"
      ],
      image: "/Brandkit/brandkit_visual_8.png",
      color: "cyan",
      link: "https://your-marketing-demo-link.com",
      github: "https://github.com/sri8harsha/Brandkit",
      caseStudy: "https://your-marketing-case-study-link.com",
      showcase: [
        {
          title: "Simple Interface",
          description: "Clean and easy-to-use dashboard. Navigate through different sections to create your brand campaigns without any complexity.",
          image: "/Brandkit/UI1.jpg"
        },
        {
          title: "Ready to Use",
          description: "Simple layout that works on any device. Everything is organized and ready for you to start creating your brand materials.",
          image: "/Brandkit/UI2.jpg"
        },
        {
          title: "Step 1: Enter Your Details",
          description: "Fill in your campaign details here - product name, target audience, goals, and any specific requirements. Then click 'Generate' to create all your branding materials instantly.",
          image: "/Brandkit/Details.jpg"
        },
        {
          title: "Get Advertisement Copy",
          description: "Receive professional ad copy ready to use for your campaigns. Perfect for Google Ads, Facebook Ads, or any marketing materials.",
          image: "/Brandkit/AC.jpg"
        },
        {
          title: "Product Descriptions & Taglines",
          description: "Get catchy taglines and detailed product descriptions that sell. Use these for your website, product pages, or marketing brochures.",
          image: "/Brandkit/Product.jpg"
        },
        {
          title: "Social Media Posts",
          description: "Ready-to-post social media content with hashtags. Perfect for Instagram, LinkedIn, Twitter, and Facebook to promote your brand.",
          image: "/Brandkit/SM.jpg"
        },
        {
          title: "Email Campaigns",
          description: "Professional email templates for your marketing campaigns. Ready to send to your customers with engaging subject lines and content.",
          image: "/Brandkit/Email.jpg"
        },
        {
          title: "Visual Brand Assets",
          description: "AI-generated posters and visual content using GPT Image 1. Get professional-looking graphics that match your brand and campaign.",
          image: "/Brandkit/brandkit_visual_8.png"
        }
      ]
    },
    {
      title: "Enterprise Document Intelligence System",
      subtitle: "RAG-powered document analysis with intelligent Q and A and automated insights",
      description: "Advanced document processing system combining OCR, vector search, and large language models to extract actionable insights from complex business documents. Designed for legal firms, consulting companies, and research organizations.",
      technical: [
        "Python backend with FastAPI for high-performance document processing",
        "Advanced OCR with table detection and layout preservation",
        "Vector embeddings using OpenAI text-embedding-ada-002",
        "Pinecone vector database for semantic search and retrieval",
        "RAG (Retrieval-Augmented Generation) with GPT-4 for contextual responses",
        "Real-time streaming responses with WebSocket connections"
      ],
      business: [
        "Processes 100-page documents in under 30 seconds",
        "95 percent accuracy in information extraction and retrieval",
        "Reduces document review time by 70 percent for legal teams",
        "Handles 10000 plus documents with sub-second search responses"
      ],
      stack: [
        "Python",
        "FastAPI",
        "OpenAI APIs",
        "Pinecone",
        "LangChain",
        "PyPDF2",
        "Gradio"
      ],
      image: "/document-assistant/demo1.jpg",
      color: "emerald",
      link: "https://your-docs-demo-link.com",
      github: "https://github.com/sri8harsha/Document-Assistant",
      caseStudy: "https://your-docs-case-study-link.com",
      showcase: [
        {
          title: "Intuitive User Interface",
          description: "Clean and modern Gradio-based interface designed for seamless user experience. The dashboard provides easy access to all document processing features with an intuitive layout that makes AI-powered document analysis accessible to everyone.",
          image: "/document-assistant/demo1.jpg"
        },
        {
          title: "PDF Document Upload",
          description: "Effortlessly upload PDF documents through the drag-and-drop interface. The system supports various document formats and automatically prepares files for AI processing with built-in validation and optimization.",
          image: "/document-assistant/demo2.jpg"
        },
        {
          title: "AI Document Processing & Summary",
          description: "Click 'Process Document' to activate advanced LLM analysis. The AI extracts key information, generates comprehensive summaries, and structures the content for intelligent querying - all powered by state-of-the-art language models.",
          image: "/document-assistant/demo3.jpg"
        },
        {
          title: "Natural Language Queries",
          description: "Ask questions about your document using natural language. The intelligent chatbot interface allows you to query specific information, request clarifications, or explore document contents through conversational AI.",
          image: "/document-assistant/demo4.jpg"
        },
        {
          title: "Intelligent AI Responses",
          description: "Receive accurate, context-aware answers powered by LLM technology. The AI provides detailed responses, cites relevant document sections, and offers insights that help you understand and utilize your documents more effectively.",
          image: "/document-assistant/demo5.jpg"
        }
      ]
    },
    {
      title: "Image Reader Utility",
      subtitle: "Python-based tool for image decoding and manipulation",
      description: "A robust Python utility for reading, decoding, and processing images. Useful for batch image analysis, format conversion, and integration into larger automation workflows.",
      technical: [
        "Python scripts for image decoding and manipulation",
        "Batch processing support for large image sets",
        "Integration-ready for automation pipelines",
        "Supports multiple image formats and error handling"
      ],
      business: [
        "Speeds up image data extraction for analytics",
        "Reduces manual image handling time by 80 percent",
        "Easily integrates with other automation tools"
      ],
      stack: [
        "Python",
        "Pillow",
        "Automation Scripting"
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "teal",
      link: "https://your-image-reader-demo-link.com",
      github: "https://github.com/sri8harsha/Image-reader",
      caseStudy: "https://your-image-reader-case-study-link.com",
      showcase: [
        {
          label: "Image Decoding",
          input: "/photoshoot/airpods_input.png",
          outputs: ["/photoshoot/airpods_output1.jpg"]
        },
        {
          label: "Batch Processing",
          input: "/photoshoot/bracelet_input.png",
          outputs: ["/photoshoot/bracelet_output1.jpg", "/photoshoot/bracelet_output2.jpg"]
        }
      ]
    }
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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 text-slate-800 pt-16">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            SRI HARSHA KOLUKULURI
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            AI Automation Engineer & Workflow Specialist
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-6">
            I architect intelligent automation systems that eliminate manual work and scale business operations. Specialized in automating workflows, AI API integrations, and production-ready solutions that deliver measurable ROI.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Currently building AI-powered automation for businesses across e-commerce, marketing, and document processing.
          </p>
          {/* HERO METRICS BAR (replace metrics bar with interactive cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-emerald-200">
              <span className="text-4xl mb-2">🚀</span>
              <span className="text-2xl font-bold text-emerald-700">15+</span>
              <span className="text-base text-slate-600 mt-1">Workflows Deployed</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-emerald-200">
              <span className="text-4xl mb-2">⚡</span>
              <span className="text-2xl font-bold text-emerald-700">200+</span>
              <span className="text-base text-slate-600 mt-1">Hours Saved/Month</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-emerald-200">
              <span className="text-4xl mb-2">📈</span>
              <span className="text-2xl font-bold text-emerald-700">75%</span>
              <span className="text-base text-slate-600 mt-1">Task Time Reduction</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-emerald-200">
              <span className="text-4xl mb-2">💰</span>
              <span className="text-2xl font-bold text-emerald-700">$50K+</span>
              <span className="text-base text-slate-600 mt-1">Annual Savings</span>
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
                      {project.subtitle && (
                        <div className="text-lg text-emerald-700 font-semibold mb-2">{project.subtitle}</div>
                      )}
                      <DialogDescription className="text-base text-slate-700 mb-4">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    {project.technical && (
                      <div className="mb-4">
                        <div className="font-semibold text-emerald-700 mb-1">Technical Implementation</div>
                        <ul className="list-disc list-inside text-base text-slate-700 ml-4">
                          {project.technical.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                      </div>
                    )}
                    {project.business && (
                      <div className="mb-4">
                        <div className="font-semibold text-emerald-700 mb-1">{project.title === 'Multi-Channel Marketing Content Generator' ? 'Generated Assets (15+ pieces)' : project.title === 'Enterprise Document Intelligence System' ? 'Core Capabilities' : 'Business Impact'}</div>
                        <ul className="list-disc list-inside text-base text-slate-700 ml-4">
                          {project.business.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                      </div>
                    )}
                    {project.metrics && (
                      <div className="mb-4">
                        <div className="font-semibold text-emerald-700 mb-1">Business Metrics</div>
                        <ul className="list-disc list-inside text-base text-slate-700 ml-4">
                          {project.metrics.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                      </div>
                    )}
                    {project.stack && (
                      <div className="mb-4">
                        <div className="font-semibold text-emerald-700 mb-1">Technical Stack</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.stack.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-3 py-1 ...">{tag}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {(project.title === "Multi-Channel Marketing Content Generator" || project.title === "Enterprise Document Intelligence System") && project.showcase && (
                      <div className="space-y-8 mt-8">
                        {project.showcase.map((item, i) => (
                          <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-shrink-0 border-2 border-emerald-200 rounded-xl p-2 bg-white shadow-md">
                              <img src={item.image} alt={item.title} className="w-48 h-32 object-cover rounded-xl" />
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white font-semibold text-sm">{i + 1}</span>
                                <h4 className="text-lg font-semibold text-emerald-700">{item.title}</h4>
                              </div>
                              <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {!(project.title === "Multi-Channel Marketing Content Generator" || project.title === "Enterprise Document Intelligence System") && project.showcase && (
                      <div className="space-y-12 mt-8">
                        {project.showcase.map((item, i) => (
                          <div key={i}>
                            <div className="font-semibold text-emerald-700 mb-4 text-xl tracking-wide uppercase flex items-center gap-2">
                              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span> {item.label || item.title || `Step ${i+1}`}
                            </div>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                              {item.input && (
                                <div className="flex-shrink-0 border-2 border-emerald-200 rounded-xl p-2 bg-white shadow-md cursor-pointer" onClick={() => openGallery([{ src: item.input, title: `${item.label || 'Before'} Input` }], 0)}>
                                  <img src={item.input} alt="input" className="w-32 h-32 object-contain rounded-lg hover:scale-105 transition-transform duration-300" />
                                  <div className="text-xs text-center mt-1 text-slate-500 font-medium">Before</div>
                                </div>
                              )}
                              <div className="flex flex-wrap gap-4">
                                {item.outputs && item.outputs.map((out, j) => (
                                  <div key={j} className="border-2 border-emerald-100 rounded-xl p-2 bg-white shadow-sm cursor-pointer" onClick={() => openGallery(item.outputs.map((output, idx) => ({ src: output, title: `${item.label || 'After'} Output ${idx + 1}` })), j)}>
                                    <img src={out} alt={`output ${j+1}`} className="w-32 h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
                                    <div className="text-xs text-center mt-1 text-slate-500 font-medium">After {j+1}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-4 mt-8">
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

      {/* About & Skills Section (side-by-side, scrollable, new content) */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* About: Scrollable Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-emerald-50/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl overflow-hidden h-[500px]">
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-emerald-100 shadow-xl h-full overflow-y-auto group">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">Engineering AI Solutions That Actually Work in Production</h2>
                  <div className="mb-4">
                    <div className="text-lg text-slate-700 font-semibold mb-1">BACKGROUND & EXPERTISE</div>
                    <p className="text-base text-slate-700">I'm a systems engineer who discovered that the gap between AI capabilities and business needs isn't technical. It's architectural. Most AI implementations fail because they're built as demos, not production systems.<br/><br/>My specialty is designing robust AI workflows that integrate seamlessly into existing business operations, handle edge cases gracefully, and scale with growing demands.</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg text-slate-700 font-semibold mb-1">TECHNICAL PHILOSOPHY</div>
                    <ul className="list-disc list-inside text-base text-slate-700">
                      <li>Reliability First: Systems must work consistently, even with unexpected inputs</li>
                      <li>User-Centric Design: Non-technical teams should operate complex AI workflows effortlessly</li>
                      <li>Measurable Impact: Every implementation includes clear metrics and ROI tracking</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg text-slate-700 font-semibold mb-1">CURRENT FOCUS AREAS</div>
                    <ul className="list-none text-base text-slate-700 space-y-2">
                      <li><span className="mr-2">🔧</span><b>Workflow Automation Architecture</b><br/>Building enterprise-grade n8n workflows with proper error handling, monitoring, and scalability</li>
                      <li><span className="mr-2">🤖</span><b>AI API Integration & Optimization</b><br/>Combining multiple AI models (GPT-4, Claude, specialized APIs) for optimal cost and performance</li>
                      <li><span className="mr-2">📊</span><b>Business Process Intelligence</b><br/>Analyzing manual workflows to identify automation opportunities with highest ROI</li>
                      <li><span className="mr-2">🚀</span><b>Production Deployment & Monitoring</b><br/>Ensuring AI systems run reliably in production with proper logging and alerts</li>
                    </ul>
                  </div>
                  <div className="mb-2">
                    <div className="text-lg text-slate-700 font-semibold mb-1">COLLABORATION APPROACH</div>
                    <p className="text-base text-slate-700">I work closely with business stakeholders to understand real operational challenges, then design technical solutions that integrate naturally into existing workflows. My goal isn't just to build impressive technology. It's to create systems that teams actually use and depend on daily.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills: Scrollable Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-emerald-100 shadow-xl h-[500px] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Skills & Technical Expertise</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">AI & Machine Learning Integration</h3>
                  <div className="mb-2 font-semibold text-emerald-700">Large Language Models</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>OpenAI GPT-4, GPT-4V (Vision), GPT-3.5 Turbo</li>
                    <li>Anthropic Claude 3.5 Sonnet, Claude 3 Haiku</li>
                    <li>Groq LLaMA inference optimization</li>
                    <li>Custom prompt engineering & fine-tuning</li>
                  </ul>
                  <div className="mb-2 font-semibold text-emerald-700">Computer Vision & Generation</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>OpenAI DALL-E 3, Stable Diffusion XL</li>
                    <li>GPT-4 Vision for image analysis and OCR</li>
                    <li>Custom ComfyUI workflows for specialized generation</li>
                    <li>Image preprocessing and optimization pipelines</li>
                  </ul>
                  <div className="mb-2 font-semibold text-emerald-700">Vector Search & RAG</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>Pinecone, Chroma, FAISS vector databases</li>
                    <li>OpenAI text-embedding-ada-002, sentence-transformers</li>
                    <li>Advanced retrieval strategies and ranking</li>
                    <li>Production RAG system optimization</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Workflow Automation & Integration</h3>
                  <div className="mb-2 font-semibold text-emerald-700">Enterprise Automation Platforms</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>n8n (Advanced) - 15+ production workflows</li>
                    <li>Zapier, Make.com - Complex multi-step automations</li>
                    <li>Custom webhook design and API orchestration</li>
                    <li>Error handling, retry logic, and monitoring</li>
                  </ul>
                  <div className="mb-2 font-semibold text-emerald-700">API Development & Integration</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>RESTful API design and documentation</li>
                    <li>Webhook architecture and event-driven systems</li>
                    <li>OAuth 2.0, API key management, rate limiting</li>
                    <li>Third-party service integration (50+ APIs)</li>
                  </ul>
                  <div className="mb-2 font-semibold text-emerald-700">Cloud & Database Systems</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>Google Cloud Platform, AWS services</li>
                    <li>MongoDB, PostgreSQL, Redis caching</li>
                    <li>Vector databases for AI applications</li>
                    <li>Automated backup and disaster recovery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Development Stack</h3>
                  <div className="mb-2 font-semibold text-emerald-700">Backend Development</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>Python (FastAPI, Flask, Django)</li>
                    <li>Node.js (Express, NestJS)</li>
                    <li>Serverless functions (Vercel, Netlify)</li>
                    <li>Docker containerization and deployment</li>
                  </ul>
                  <div className="mb-2 font-semibold text-emerald-700">Frontend & Interfaces</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>React, Next.js for custom dashboards</li>
                    <li>Gradio, Streamlit for rapid AI prototyping</li>
                    <li>No-code platforms (Bubble.io, Webflow)</li>
                    <li>Responsive design and mobile optimization</li>
                  </ul>
                  <div className="mb-2 font-semibold text-emerald-700">Development Operations</div>
                  <ul className="list-disc list-inside text-base text-slate-700 mb-2">
                    <li>Git version control and collaboration</li>
                    <li>CI/CD pipelines for automated testing</li>
                    <li>Production monitoring and alerting</li>
                    <li>Performance optimization and scaling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results/Metrics Section */}
      <section id="results" className="py-20 px-6 relative bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Measurable Business Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-emerald-700">E-commerce Automation Client</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>Reduced product photography costs by 85 percent ($24K annual savings)</li>
                <li>Increased catalog update frequency from monthly to daily</li>
                <li>Improved conversion rates by 23 percent with consistent product imagery</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-emerald-700">Marketing Agency Partnership</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>Decreased campaign development time by 90 percent (5 days to 4 hours)</li>
                <li>Enabled 3x client capacity without additional staff</li>
                <li>Generated $180K additional annual revenue through efficiency gains</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-emerald-700">Legal Firm Document Processing</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>Reduced contract review time by 70 percent (8 hours to 2.4 hours)</li>
                <li>Improved accuracy in key clause identification by 95 percent</li>
                <li>Processed 2,000 plus documents with zero security incidents</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-emerald-700">Manufacturing Process Optimization</h3>
              <ul className="list-disc list-inside text-lg text-slate-700">
                <li>Automated inventory reporting saving 15 hours per week</li>
                <li>Eliminated manual data entry errors (100 percent to 0 percent)</li>
                <li>Reduced supplier communication cycle from 3 days to 2 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 relative bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-slate-700 mb-6">Ready to transform your manual processes into intelligent automation?</p>
          <div className="flex flex-col items-center gap-4 mb-8">
            <a href="mailto:sri0harsha@gmail.com" className="text-lg font-medium text-emerald-700 hover:text-white hover:bg-emerald-500 transition-all duration-300 px-4 py-2 rounded-xl shadow inline-flex items-center gap-2"><Mail className="w-5 h-5" /> Email: sri0harsha@gmail.com</a>
            <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-emerald-700 hover:text-emerald-900 transition-colors">📅 Schedule Consultation</a>
            <a href="https://linkedin.com/in/sri-harsha-3b0401170" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-emerald-700 hover:text-emerald-900 transition-colors">💼 LinkedIn</a>
            <a href="https://github.com/sri8harsha" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-emerald-700 hover:text-emerald-900 transition-colors">🔗 GitHub</a>
          </div>
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
      <Card className="bg-white/80 backdrop-blur-sm border-emerald-100 overflow-hidden hover:shadow-emerald-200 hover:scale-105 transition-all duration-500 h-full">
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
              <span
                key={tagIndex}
                className="px-3 py-1 ...">{tag}</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
