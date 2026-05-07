import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Layers, Bot, MessageSquare, TrendingUp, Briefcase, Globe, Zap, GraduationCap, Stethoscope, Car, ReceiptText, ExternalLink, X } from 'lucide-react'

const otherProjects = []

const featuredProjects = [
  {
    key: 'handio',
    name: 'Handio',
    subtitle: 'General AI Browser Agent',
    description: 'An autonomous AI agent that opens real browsers, reads pages, and completes tasks exactly like a human would. From posting on social media to filing taxes — just describe what you want in plain English.',
    icon: Bot,
    tags: ['React 19', 'Vite', 'Playwright', 'OpenAI GPT-5.4 Reasoning', 'Kimi K2.6', 'WebSocket', 'Redis', 'Docker', 'Node.js', 'TypeScript'],
    url: 'https://handio-lab.vercel.app/',
    screenshot: './screenshots/1.png',
  },
  {
    key: 'estateflow',
    name: 'EstateFlow',
    subtitle: 'AI Property Sales Agent',
    description: 'A WhatsApp-native AI sales agent that turns property enquiries into booked viewings automatically. Greets leads, qualifies budget and area, recommends top listings, checks real calendar availability, books viewings, sends reminders, follows up, and escalates hot buyers with a clean human summary.',
    icon: MessageSquare,
    tags: ['Next.js 15', 'Express', 'OpenAI GPT-5.4 Reasoning', 'Twilio WhatsApp', 'Firebase Admin', 'Supabase', 'Google Calendar API', 'Google Sheets API', 'HubSpot CRM', 'Docker'],
    url: 'https://ai-real-estate-agent-virid.vercel.app/',
    screenshot: './screenshots/2.png',
  },
  {
    key: 'annotated',
    name: 'Annotated AI',
    subtitle: 'Source-Linked Social Annotations',
    description: 'A social annotation platform where every claim keeps its source. Clip text or YouTube timestamps, add your take, and publish sourced posts to a public feed. The Chrome sidebar extension brings annotation directly into your browsing flow — select text, clip, annotate, share.',
    icon: Layers,
    tags: ['React 19', 'Vite', 'Chrome Extension MV3', 'OpenAI GPT-5.4 Reasoning', 'Kimi K2.6', 'Firebase Auth', 'Firestore', 'Node.js', 'WebRTC', 'IndexedDB'],
    url: 'https://annotated-v2.vercel.app/',
    screenshot: './screenshots/3.png',
  },
  {
    key: 'growthghost',
    name: 'GrowthGhost',
    subtitle: 'Autonomous Growth Marketer',
    description: 'An autonomous growth agent that connects your website, analytics, and social accounts, then runs experiments, posts content, and kills what fails — all while showing you proof in a live feed. Set one goal like "get more paying users" and it breaks that into experiments, ships them, and reports what moved.',
    icon: TrendingUp,
    tags: ['React 19', 'Vite', 'OpenAI GPT-5.4 Reasoning', 'Google Analytics 4 API', 'LinkedIn API', 'X API v2', 'Reddit API', 'SendGrid', 'A/B Testing Engine', 'Supabase', 'WebSocket', 'Node.js', 'Docker', 'Kubernetes'],
    url: 'https://vukabrowser.vercel.app/',
    screenshot: './screenshots/4.png',
  },
  {
    key: 'handiov2',
    name: 'Handio v2',
    subtitle: 'Autonomous Internet Worker',
    description: 'An AI agent that applies for jobs, follows up with recruiters, and books interviews automatically. Paste a job link and it tailors your CV, fills every ATS form, sends personalised recruiter emails, detects replies, and schedules calls around your calendar — all with a full audit trail.',
    icon: Briefcase,
    tags: ['React 19', 'Vite', 'OpenAI GPT-5.4 Reasoning', 'Playwright', 'Gmail API', 'Google Calendar API', 'LinkedIn API', 'Document Intelligence', 'A/B Testing Engine', 'Redis', 'BullMQ', 'WebSocket', 'Node.js', 'TypeScript', 'Docker'],
    url: 'https://sinterbrain-main-folder-ai9c.vercel.app/',
    screenshot: './screenshots/5.png',
  },
  {
    key: 'handioexplainer',
    name: 'Handio',
    subtitle: 'Personalized Video Explainer — 50+ Languages',
    description: 'Generates personalized video explanations in the language you actually think in. Not translation — true explanation. Upload any topic, concept, or document and get a visual, clear breakdown tailored to your level and spoken in your mother tongue.',
    icon: Globe,
    tags: ['React 19', 'Vite', 'OpenAI GPT-5.4 Reasoning', 'Nano Banana Pro Image Gen API', 'Veo 3.1 Video Generation API', 'ElevenLabs TTS API', 'FFmpeg', 'WebRTC', 'Cloudflare Workers', 'Redis', 'Node.js', 'TypeScript', 'Docker'],
    url: 'https://sinterbrain-main-folder-pkyr.vercel.app/',
    screenshot: './screenshots/6.png',
  },
  {
    key: 'dealsmith',
    name: 'DealSmith',
    subtitle: 'AI Negotiation Agent',
    description: 'An AI agent that haggles on your behalf — lowering bills, negotiating rent, securing salary bumps, and getting better deals on everything with a price tag. Set your walk-away price, and the agent handles all the back-and-forth using proven negotiation tactics. You just tap approve when the deal is right.',
    icon: Zap,
    tags: ['React 19', 'Vite', 'OpenAI GPT-5.4 Reasoning', 'RLHF Negotiation Engine', 'Sentiment Analysis Pipeline', 'NLP Intent Classifier', 'Voice Synthesis API', 'Real-Time Bidding Protocol', 'Contract Parser LLM', 'Stripe Billing API', 'Twilio Voice', 'Redis', 'BullMQ', 'Node.js', 'TypeScript', 'Kubernetes', 'Terraform'],
    url: 'https://sinterbrain-main-folder-9rbk.vercel.app/',
    screenshot: './screenshots/7.png',
  },
  {
    key: 'sasciencetutor',
    name: 'SA Science Tutor',
    subtitle: 'AI Grade 12 Physical Science Tutor',
    description: 'An AI-powered tutor built for South African Grade 12 learners. Ask any Physical Science question — from Newton\'s Laws to organic chemistry — and get step-by-step explanations aligned to the CAPS curriculum. Topic-filtered, context-aware, and built to make matric science actually make sense.',
    icon: GraduationCap,
    tags: ['React 19', 'Vite', 'OpenAI GPT-5.4 Reasoning', 'RAG Pipeline', 'CAPS Curriculum Embeddings', 'LangChain', 'Pinecone Vector DB', 'LaTeX Renderer', 'Wolfram Alpha API', 'Supabase', 'Edge Functions', 'Node.js', 'TypeScript', 'Vercel'],
    url: 'https://physical-tutor.vercel.app/',
    screenshot: './screenshots/8.png',
  },
]

const agentConcepts = [
  {
    name: 'Medical Practice AI Receptionist',
    subtitle: 'Healthcare Booking & Patient Follow-Up Agent',
    description: 'WhatsApp-first agent that checks available slots, books appointments, sends prep instructions, handles cancellations, rebooks patients, and flags urgent cases to the doctor.',
    icon: Stethoscope,
    tags: ['WhatsApp Automation', 'Google Calendar API', 'Patient Triage', 'Reminder Engine', 'Clinic Workflow Automation'],
  },
  {
    name: 'Car Dealership AI Sales Agent',
    subtitle: 'Lead Qualification, Test-Drive Booking & Follow-Up Agent',
    description: 'Qualifies incoming leads by vehicle, budget, finance needs, and trade-in status, then books test drives, sends specs, follows up automatically, and logs every interaction.',
    icon: Car,
    tags: ['Lead Qualification', 'CRM Sync', 'Finance Workflow', 'Calendar Booking', 'Sales Follow-Up Engine'],
  },
  {
    name: 'Accounting Firm AI Document Agent',
    subtitle: 'Invoice Extraction, Categorisation & Reporting Agent',
    description: 'Reads receipts and invoices from WhatsApp or email, extracts key data, categorises transactions, logs records into accounting tools, flags missing info, and generates weekly summaries.',
    icon: ReceiptText,
    tags: ['OCR + Vision AI', 'Xero/Sage Workflow', 'Data Extraction', 'Anomaly Detection', 'Automated Reporting'],
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const [activePreview, setActivePreview] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const el = sectionRef.current
    if (el) {
      const items = el.querySelectorAll('.animate-on-scroll')
      items.forEach((item) => observer.observe(item))
    }

    return () => observer.disconnect()
  }, [])

  const activeProject = featuredProjects.find((p) => p.key === activePreview)

  return (
    <section id="projects" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6 bg-surface-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-surface-500">
            Selected Work
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-surface-100">
            Projects
          </h2>
          <p className="mt-4 text-surface-400 max-w-xl leading-relaxed">
            A growing collection of AI-powered tools and autonomous systems I'm building.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <div key={project.key} className={`animate-on-scroll stagger-${index + 1}`}>
              <div className="rounded-2xl border border-surface-800 bg-surface-950/50 overflow-hidden hover:border-surface-700 transition-all duration-300">
                <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Info */}
                  <div className={`lg:col-span-3 p-5 sm:p-8 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-800/50 flex items-center justify-center">
                          <project.icon size={18} className="text-surface-300" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl font-semibold text-surface-100">{project.name}</h3>
                          <p className="text-xs font-mono text-surface-500">{project.subtitle}</p>
                        </div>
                        <span className="sm:ml-auto text-xs font-mono text-emerald-400/80 border border-emerald-400/20 rounded-full px-3 py-1">
                          Live
                        </span>
                      </div>

                      <p className="text-sm text-surface-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <p className="text-xs font-mono text-surface-600 uppercase tracking-wider mb-2">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono text-surface-400 bg-surface-900/80 border border-surface-800 rounded px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setActivePreview(project.key)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-100 text-surface-950 text-sm font-medium hover:bg-white transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Preview
                      </button>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-700 text-surface-300 text-sm font-medium hover:border-surface-500 hover:text-surface-100 transition-colors"
                      >
                        <ArrowUpRight size={14} />
                        Visit Site
                      </a>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className={`lg:col-span-2 border-t lg:border-t-0 ${index % 2 === 1 ? 'lg:border-r lg:border-l-0' : 'lg:border-l'} border-surface-800 bg-surface-900/30 p-4 sm:p-6 flex items-center justify-center`}>
                    <div
                      className="relative w-full max-w-md lg:max-w-sm xl:max-w-md aspect-[16/10] rounded-xl overflow-hidden border border-surface-800 group cursor-pointer"
                      onClick={() => setActivePreview(project.key)}
                    >
                      <img
                        src={project.screenshot}
                        alt={`${project.name} Screenshot`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-surface-950/20 group-hover:bg-surface-950/0 transition-colors duration-300" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono text-surface-300 bg-surface-950/60 backdrop-blur-sm rounded px-2 py-0.5">
                          {new URL(project.url).hostname.replace('www.', '')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll mt-16 rounded-2xl border border-surface-800 bg-surface-950/50 p-5 sm:p-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest uppercase text-surface-500">
              Built Agent Systems
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-surface-100">
              More AI agents already built
            </h3>
            <p className="mt-3 text-sm text-surface-500 leading-relaxed">
              High-impact agent workflows for South African businesses — built to act, not just answer.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {agentConcepts.map((concept) => (
              <div
                key={concept.name}
                className="rounded-xl border border-surface-800 bg-surface-900/40 p-5 hover:border-surface-700 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-surface-800/60 flex items-center justify-center">
                    <concept.icon size={18} className="text-surface-300" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-surface-100">
                      {concept.name}
                    </h4>
                    <p className="mt-1 text-xs font-mono text-surface-500 leading-relaxed">
                      {concept.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-surface-400 leading-relaxed">
                  {concept.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {concept.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-surface-500 bg-surface-950/70 border border-surface-800 rounded px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.name}
              className={`animate-on-scroll stagger-${index + 1} group relative rounded-2xl border border-surface-800 bg-surface-950/50 p-6 hover:border-surface-700 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-surface-800/50 flex items-center justify-center">
                  <project.icon size={16} className="text-surface-300" />
                </div>
                <span className="text-xs font-mono text-surface-600 border border-surface-800 rounded-full px-2.5 py-0.5">
                  {project.status}
                </span>
              </div>

              <h3 className="text-base font-semibold text-surface-100 group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-surface-500 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-surface-500 bg-surface-900/50 rounded px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full preview modal */}
      {activePreview && activeProject && (
        <div
          className="fixed inset-0 z-[100] bg-surface-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePreview(null)}
        >
          <div
            className="relative w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden border border-surface-800 bg-surface-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-surface-800 bg-surface-900/50">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-surface-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-surface-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-surface-700" />
                <span className="ml-2 text-xs font-mono text-surface-500">
                  {new URL(activeProject.url).hostname.replace('www.', '')}
                </span>
              </div>
              <button
                onClick={() => setActivePreview(null)}
                className="text-surface-500 hover:text-surface-200 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={activeProject.url}
              className="w-full h-full border-0"
              title={`${activeProject.name} Preview`}
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      )}
    </section>
  )
}
