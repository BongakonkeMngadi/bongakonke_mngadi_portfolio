import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-surface-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-surface-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left">
          <div className="animate-fade-in opacity-0 mb-6">
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-surface-500 border border-surface-800 rounded-full px-4 py-1.5">
              Johannesburg, South Africa
            </span>
          </div>

          <h1 className="animate-fade-in-up opacity-0 stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-surface-50 leading-[1.1]">
            Bongakonke Mngadi
          </h1>

          <p className="animate-fade-in-up opacity-0 stagger-2 mt-6 text-lg sm:text-xl md:text-2xl text-surface-400 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            AI Agent Developer & Full-Stack Developer
          </p>

          <p className="animate-fade-in-up opacity-0 stagger-3 mt-6 text-base text-surface-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Crafting autonomous systems that think, act, and deliver real-world results. Production-grade agents powered by large language models.
          </p>

          <div className="animate-fade-in-up opacity-0 stagger-4 mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-surface-100 text-surface-950 text-sm font-medium hover:bg-white transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-surface-700 text-surface-300 text-sm font-medium hover:border-surface-500 hover:text-surface-100 transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>

          <div className="animate-fade-in-up opacity-0 stagger-5 mt-12 flex items-center justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/BongakonkeMngadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 hover:text-surface-200 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bonga-ngema-a56834320/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 hover:text-surface-200 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/bonga_ngema_0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 hover:text-surface-200 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up opacity-0 stagger-3 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
          <div className="rounded-2xl border border-surface-800 bg-surface-950/60 p-2 shadow-2xl shadow-black/30">
            <img
              src="./screenshots/9.png"
              alt=""
              className="w-full max-h-[460px] rounded-xl object-contain"
            />
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-surface-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-surface-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}
