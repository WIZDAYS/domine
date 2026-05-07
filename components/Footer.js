import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-domine-border mt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-domine-gray text-sm tracking-widest">
            © 2026 domine.ing — Premium Domain Gallery
          </p>
          <div className="flex items-center gap-8">
            <Link href="/collection"
              className="text-domine-gray text-xs tracking-[0.2em] uppercase hover:text-white transition-colors">
              Collection
            </Link>
            <Link href="/about"
              className="text-domine-gray text-xs tracking-[0.2em] uppercase hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact"
              className="text-domine-gray text-xs tracking-[0.2em] uppercase hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
