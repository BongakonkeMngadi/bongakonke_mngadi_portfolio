import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll order-2 md:order-1">
            <span className="font-mono text-xs tracking-widest uppercase text-surface-500">
              About Me
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-surface-100 leading-tight">
              Building agents that multiply impact
            </h2>
            <div className="mt-6 space-y-4 text-surface-400 leading-relaxed">
              <p>
                I design production-grade AI agents powered by large language models, integrating tools, APIs, and data into seamless intelligent workflows.
              </p>
              <p>
                My work focuses on reliability, scalability, and measurable impact — from automating operations to augmenting human decision-making.
              </p>
              <p className="text-surface-500">
                Driven by a belief that well-designed AI agents aren't just tools, but force multipliers for innovation and efficiency.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['LLM Orchestration', 'Autonomous Agents', 'Full-Stack', 'React', 'Node.js', 'Firebase', 'Supabase', 'OpenAI API'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-surface-800 text-xs font-mono text-surface-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll stagger-2 order-1 md:order-2">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-900 border border-surface-800">
                <img
                  src="./images/photo2.png"
                  alt="Bongakonke Mngadi"
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-surface-800/30 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
