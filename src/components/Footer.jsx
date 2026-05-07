export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-surface-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-surface-600 font-mono">
          &copy; {year} Bongakonke Mngadi. All rights reserved.
        </p>
        <p className="text-xs text-surface-700 font-mono">
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
