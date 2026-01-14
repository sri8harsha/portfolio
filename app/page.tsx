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
  Calendar,
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
      description: "Research-informed automation system exploring how e-commerce businesses can leverage AI for product photography without technical expertise. This project provided insights into user adoption barriers, workflow design for non-technical users, and the economics of AI implementation in small businesses. Key learning: Understanding the gap between technical capability and business usability.",
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
      description: "AI-powered marketing system exploring content generation workflows for small businesses. This project examined how non-technical marketing teams interact with AI tools and the challenges of maintaining brand consistency across automated content generation. Insights gained on balancing automation efficiency with creative control requirements.",
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
      description: "Document processing system investigating practical applications of AI in knowledge work. This project explored how businesses handle complex document analysis tasks and the challenges of implementing AI in high-stakes environments where accuracy is critical. Provided insights into user trust factors and verification workflows.",
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
      description: "Python utility developed to support image processing workflows. This project explored technical foundations of image handling and integration patterns for AI systems. Practical learning experience in building reusable components for larger automation systems.",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Product Manager | Business Analytics Researcher | AI for Business Innovator
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 italic">
            Exploring how non-technical entrepreneurs adopt AI through practical product development and business analytics
          </p>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-6">
            I'm a Product Manager with a passion for understanding how businesses adopt and implement AI technologies. With an MS in Business Analytics from University of New Haven and 4+ years of experience in AI product development and data analytics, I bridge the gap between technical AI capabilities and practical business applications.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            My work focuses on developing AI solutions that non-technical business users can actually operate, addressing a critical challenge: why do most AI implementations fail to gain adoption, and how can we design better solutions?
          </p>
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
              Practical AI Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real-world explorations in AI workflow automation and business implementation
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
                            <span key={tagIndex} className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium">{tag}</span>
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

      {/* Academic & Research Background Section */}
      <section id="academic" className="py-20 px-6 relative bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center">Academic & Research Background</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-emerald-700">EDUCATION</h3>
            <div className="mb-4">
              <p className="text-lg font-semibold text-slate-800">MS in Business Analytics, University of New Haven, 2023</p>
              <p className="text-base text-slate-600 mt-1">Relevant Coursework: Predictive Analytics, Data Mining, Business Intelligence, Statistical Analysis, Database Management, Marketing Analytics</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-800">B.Tech in Computer Science, Gitam University Bangalore, 2016-2020</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-emerald-700">RESEARCH INTERESTS</h3>
            <ul className="list-disc list-inside text-base text-slate-700 space-y-2">
              <li>AI adoption and implementation challenges in small businesses and startups. Why do some businesses successfully integrate AI while others struggle? What factors beyond technical capability determine success?</li>
              <li>Technology acceptance and usability for non-technical entrepreneurs. How can we design AI tools that business users actually want to use and can use effectively?</li>
              <li>Business analytics applications in startup validation and customer discovery. What role does data play in early-stage entrepreneurial decision making?</li>
              <li>Product management strategies for AI-powered platforms. How do traditional product management frameworks need to adapt for AI products?</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-emerald-700">PRACTITIONER RESEARCH</h3>
            <p className="text-base text-slate-700">My work on VisualyAI serves as an ongoing case study in entrepreneurship and AI product development. This hands-on experience provides real-time insights into customer discovery, MVP development, market validation, and the practical challenges of building AI-powered platforms. The entrepreneurial journey complements academic frameworks with authentic experience navigating uncertainty, pivoting strategies, and learning from both successes and setbacks.</p>
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
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">Understanding AI Adoption in Business</h2>
                  <div className="mb-4">
                    <div className="text-lg text-slate-700 font-semibold mb-1">BACKGROUND & EXPERTISE</div>
                    <p className="text-base text-slate-700">I'm a Product Manager with a strong foundation in business analytics and data-driven decision making. With an MS in Business Analytics from University of New Haven, I combine academic training with practical experience in AI product development at Phasorsoft and prior data analytics work at Cognizant.<br/><br/>My focus is understanding how businesses actually adopt and use AI technologies. Through my work and independent projects, I've gained insights into the challenges non-technical users face, the barriers to successful AI implementation, and the design patterns that lead to actual business adoption rather than abandoned pilot programs.</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg text-slate-700 font-semibold mb-1">RESEARCH INTERESTS</div>
                    <p className="text-base text-slate-700 mb-2">I'm interested in exploring several interconnected areas where AI meets business practice:</p>
                    <ul className="list-disc list-inside text-base text-slate-700 space-y-1">
                      <li>How do non-technical entrepreneurs and small business owners make decisions about adopting AI technologies? What are the real barriers beyond cost and technical complexity?</li>
                      <li>What design patterns make AI tools accessible to business users without technical backgrounds? How can we bridge the gap between AI capabilities and business needs?</li>
                      <li>How do startups and small businesses validate AI product ideas and achieve product-market fit? What lessons from traditional entrepreneurship apply to AI-powered businesses?</li>
                    </ul>
                    <p className="text-base text-slate-700 mt-2">These questions drive my work and inform my interest in contributing to academic research and teaching in entrepreneurship and business innovation.</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-lg text-slate-700 font-semibold mb-1">CURRENT WORK</div>
                    <p className="text-base text-slate-700 mb-2">At Phasorsoft, I lead AI automation product initiatives, focusing on solutions that non-technical business teams can adopt and use effectively. This work involves understanding user needs, designing accessible interfaces, and ensuring AI tools integrate smoothly into existing business processes.</p>
                    <p className="text-base text-slate-700">Independently, I'm developing VisualyAI, an AI workflow marketplace concept. This entrepreneurial project serves as a live case study in customer discovery, MVP development, and the practical challenges of building AI-powered platforms. The experience provides authentic insights into what entrepreneurs face when trying to leverage AI for business innovation.</p>
                    <p className="text-base text-slate-700 mt-2">Both experiences inform my interest in how AI adoption actually happens in real-world business contexts, beyond the hype and theoretical frameworks.</p>
                  </div>
                  <div className="mb-2">
                    <div className="text-lg text-slate-700 font-semibold mb-1">AREAS OF CONTRIBUTION</div>
                    <p className="text-base text-slate-700 mb-2">Through my combination of business analytics training, product management experience, and entrepreneurial work, I'm interested in contributing to academic programs in several ways:</p>
                    <ul className="list-disc list-inside text-base text-slate-700 space-y-1">
                      <li><b>Research Support:</b> I can assist with studies on AI adoption in small businesses, entrepreneurship challenges, or technology implementation in non-technical organizations. My practitioner perspective complements academic research methods.</li>
                      <li><b>Student Mentorship:</b> I can help students understand how to apply AI in business contexts, navigate startup validation, or develop products for non-technical users. My ongoing entrepreneurial journey provides relatable, current examples.</li>
                      <li><b>Program Coordination:</b> I'm interested in supporting entrepreneurship centers, innovation labs, or business analytics programs through event coordination, industry connections, or program development.</li>
                      <li><b>Curriculum Development:</b> I can contribute to course development for AI in business, product management, or entrepreneurship courses by providing real-world case studies and practical frameworks.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills: Scrollable Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-emerald-100 shadow-xl h-[500px] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Technical Background & Capabilities</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-700">PRODUCT MANAGEMENT & BUSINESS ANALYTICS</h3>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Product Strategy & Development:</div>
                    <p className="text-base text-slate-700 mb-2">AI product roadmapping, user research and discovery, go-to-market planning, feature prioritization, product-market fit validation</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Business Analytics:</div>
                    <p className="text-base text-slate-700 mb-2">Python, SQL, R for data analysis, Tableau and Power BI for visualization, predictive modeling, statistical analysis, A/B testing and experimentation</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Data Management:</div>
                    <p className="text-base text-slate-700 mb-2">Database design and querying (PostgreSQL, MongoDB), data pipeline development, business intelligence reporting, performance metrics and KPIs</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-700">AI INTEGRATION & IMPLEMENTATION</h3>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">AI Platform Experience:</div>
                    <p className="text-base text-slate-700 mb-2">OpenAI APIs (GPT-4, DALL-E), Anthropic Claude, integration of large language models into business applications, prompt engineering for business use cases</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Workflow Automation:</div>
                    <p className="text-base text-slate-700 mb-2">n8n workflow design, API orchestration, business process automation, integration of multiple AI services for complete business solutions</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Product Development:</div>
                    <p className="text-base text-slate-700 mb-2">Understanding of full-stack development environments, API integration patterns, user interface design principles, system architecture for AI applications</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-700">TECHNICAL PROFICIENCIES</h3>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Programming & Scripting:</div>
                    <p className="text-base text-slate-700 mb-2">Python (FastAPI, data analysis libraries), JavaScript/Node.js, SQL for database queries, basic understanding of React and Next.js for product collaboration</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Development Tools:</div>
                    <p className="text-base text-slate-700 mb-2">Git version control, Google Cloud Platform, AWS basics, Docker containerization concepts, RESTful API integration</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">AI Tools & Platforms:</div>
                    <p className="text-base text-slate-700 mb-2">Experience implementing OpenAI GPT-4 and Vision models, Claude API, vector databases (Pinecone, Chroma), RAG system design, ComfyUI for image generation workflows</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Automation & Integration:</div>
                    <p className="text-base text-slate-700 mb-2">n8n advanced workflows, Zapier and Make.com, webhook design, OAuth 2.0 implementation, third-party API integration and management</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-emerald-700">SOFT SKILLS & LEADERSHIP</h3>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Cross-functional Collaboration:</div>
                    <p className="text-base text-slate-700 mb-2">Working with engineering, design, and business teams to deliver AI products, translating between technical and business stakeholders</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">User-Centric Design:</div>
                    <p className="text-base text-slate-700 mb-2">Conducting user research, understanding adoption barriers, designing for non-technical users, prioritizing accessibility and usability</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Strategic Thinking:</div>
                    <p className="text-base text-slate-700 mb-2">Market analysis, competitive research, business case development, ROI calculation, pricing strategy for AI products</p>
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 font-semibold text-slate-800">Communication:</div>
                    <p className="text-base text-slate-700 mb-2">Technical documentation, stakeholder presentations, teaching complex concepts to non-technical audiences, mentoring junior team members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="results" className="py-20 px-6 relative bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-center">Professional Experience Highlights</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-emerald-700">PRODUCT MANAGEMENT AT PHASORSOFT</h3>
              <p className="text-base text-slate-700">Leading AI automation product development with emphasis on user adoption and business scalability. Managing cross-functional teams to deliver AI solutions that integrate into business operations. Conducting user research to understand how non-technical teams interact with AI tools and what drives successful implementation.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-emerald-700">DATA ANALYTICS AT COGNIZANT</h3>
              <p className="text-base text-slate-700">Performed business analytics using Python, SQL, Tableau, and Power BI for data-driven decision making. Developed predictive models and interactive dashboards. Mentored junior analysts on analytical methods and data presentation best practices. Gained foundation in translating data insights into business recommendations.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-3 text-emerald-700">ENTREPRENEURIAL EXPERIENCE</h3>
              <p className="text-base text-slate-700">Developing VisualyAI marketplace concept through customer discovery and lean startup methodologies. Experiencing firsthand the challenges entrepreneurs face with AI adoption, product validation, and go-to-market strategy. Building practical understanding of what it takes to bring an AI product from concept to market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 relative bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-[1.15]">Let's Connect</h2>
          <p className="text-xl text-slate-700 mb-6">I'm interested in exploring opportunities to contribute to academic programs in entrepreneurship, business analytics, or AI for business. If you're working on research in AI adoption, technology entrepreneurship, or business innovation, I'd welcome the chance to connect and discuss potential collaboration.</p>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-emerald-700">OPEN TO:</h3>
            <ul className="list-disc list-inside text-base text-slate-700 space-y-2 mb-6">
              <li>Research collaboration opportunities in AI adoption or entrepreneurship studies</li>
              <li>Part-time positions supporting academic programs in business or innovation</li>
              <li>Guest speaking or workshop facilitation on AI entrepreneurship topics</li>
              <li>Student mentorship in product management, business analytics, or startup development</li>
            </ul>
            <div className="border-t border-emerald-100 pt-6">
              <p className="text-lg font-semibold text-slate-800 mb-2">CONTACT:</p>
              <p className="text-base text-slate-700">Email: sri0harsha@gmail.com</p>
              <p className="text-base text-slate-600 mt-1">University of New Haven Business Analytics Graduate, 2023</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mb-8 w-full">
            <a href="mailto:sri0harsha@gmail.com" className="w-full max-w-md text-lg font-medium border-2 border-emerald-500 text-emerald-600 bg-transparent hover:bg-emerald-500 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl shadow inline-flex items-center gap-2 justify-center">
              <Mail className="w-5 h-5 transition-colors duration-300" /> Email: sri0harsha@gmail.com
            </a>
            <a href="https://calendly.com/your-link" target="_blank" rel="noopener noreferrer" className="w-full max-w-md text-lg font-medium border-2 border-emerald-500 text-emerald-600 bg-transparent hover:bg-emerald-500 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl shadow inline-flex items-center gap-2 justify-center">
              <Calendar className="w-5 h-5 transition-colors duration-300" /> Schedule Meeting
            </a>
            <a href="https://linkedin.com/in/sri-harsha-3b0401170" target="_blank" rel="noopener noreferrer" className="w-full max-w-md text-lg font-medium border-2 border-emerald-500 text-emerald-600 bg-transparent hover:bg-emerald-500 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl shadow inline-flex items-center gap-2 justify-center">
              <Linkedin className="w-5 h-5 transition-colors duration-300" /> LinkedIn
            </a>
            <a href="https://github.com/sri8harsha" target="_blank" rel="noopener noreferrer" className="w-full max-w-md text-lg font-medium border-2 border-emerald-500 text-emerald-600 bg-transparent hover:bg-emerald-500 hover:text-white transition-all duration-300 px-6 py-3 rounded-xl shadow inline-flex items-center gap-2 justify-center">
              <Github className="w-5 h-5 transition-colors duration-300" /> GitHub
            </a>
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
            <p className="text-slate-500">© 2025 Sri Harsha Kolukuluri. Product Manager & Business Analytics Researcher.</p>
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
                className="px-3 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium">{tag}</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
