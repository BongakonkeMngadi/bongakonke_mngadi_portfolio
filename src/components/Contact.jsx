import { useEffect, useRef } from 'react'
import { Download, FileText, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef(null)

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

  return (
    <section id="contact" ref={sectionRef} className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="animate-on-scroll">
            <span className="font-mono text-xs tracking-widest uppercase text-surface-500">
              Contact
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-surface-100 leading-tight">
              Let's build something together
            </h2>
            <p className="mt-6 text-surface-400 leading-relaxed max-w-md">
              Open to collaborations, freelance projects, and full-time opportunities in AI and full-stack development.
            </p>

            <div className="mt-8 rounded-2xl border border-surface-800 bg-surface-900/30 p-5 max-w-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-800/50 flex items-center justify-center">
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-surface-200">Resume / CV</h3>
                  <p className="mt-1 text-sm text-surface-500 leading-relaxed">
                    View my full CV in the browser or download a PDF copy.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/resume/my_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-100 text-surface-950 text-sm font-medium hover:bg-white transition-colors"
                >
                  <FileText size={14} />
                  View CV
                </a>
                <a
                  href="/resume/my_resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-700 text-surface-300 text-sm font-medium hover:border-surface-500 hover:text-surface-100 transition-colors"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:mngadibongakonke@gmail.com"
                className="flex items-center gap-4 text-surface-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-800/50 flex items-center justify-center group-hover:bg-surface-800 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-sm">mngadibongakonke@gmail.com</span>
              </a>

              <a
                href="tel:+27655829095"
                className="flex items-center gap-4 text-surface-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-800/50 flex items-center justify-center group-hover:bg-surface-800 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+27 65 582 9095</span>
              </a>

              <div className="flex items-center gap-4 text-surface-300">
                <div className="w-10 h-10 rounded-lg bg-surface-800/50 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Johannesburg, Bramley, Forest, 96</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll stagger-2">
            <div className="rounded-2xl border border-surface-800 bg-surface-900/30 p-6 sm:p-8">
              <h3 className="text-sm font-medium text-surface-200 mb-6">Connect</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/BongakonkeMngadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-surface-800 hover:border-surface-600 hover:bg-surface-800/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-surface-400" />
                    <div>
                      <p className="text-sm font-medium text-surface-200">GitHub</p>
                      <p className="text-xs text-surface-500 font-mono">@BongakonkeMngadi</p>
                    </div>
                  </div>
                  <span className="text-xs text-surface-600 group-hover:text-surface-400 transition-colors">→</span>
                </a>

                <a
                  href="https://github.com/ngemabonga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-surface-800 hover:border-surface-600 hover:bg-surface-800/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-surface-400" />
                    <div>
                      <p className="text-sm font-medium text-surface-200">GitHub (Alt)</p>
                      <p className="text-xs text-surface-500 font-mono">@ngemabonga</p>
                    </div>
                  </div>
                  <span className="text-xs text-surface-600 group-hover:text-surface-400 transition-colors">→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/bonga-ngema-a56834320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-surface-800 hover:border-surface-600 hover:bg-surface-800/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin size={18} className="text-surface-400" />
                    <div>
                      <p className="text-sm font-medium text-surface-200">LinkedIn</p>
                      <p className="text-xs text-surface-500 font-mono">bonga-ngema</p>
                    </div>
                  </div>
                  <span className="text-xs text-surface-600 group-hover:text-surface-400 transition-colors">→</span>
                </a>

                <a
                  href="https://x.com/bonga_ngema_0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-surface-800 hover:border-surface-600 hover:bg-surface-800/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Twitter size={18} className="text-surface-400" />
                    <div>
                      <p className="text-sm font-medium text-surface-200">X / Twitter</p>
                      <p className="text-xs text-surface-500 font-mono">@bonga_ngema_0</p>
                    </div>
                  </div>
                  <span className="text-xs text-surface-600 group-hover:text-surface-400 transition-colors">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
