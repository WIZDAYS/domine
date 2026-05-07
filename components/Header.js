'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)' }}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 로고 */}
        <Link href="/" className="text-white text-xl tracking-[0.3em] font-light hover:text-domine-gold transition-colors duration-300">
          DOMINE
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-12">
          <li>
            <Link href="/collection"
              className="text-domine-gray text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300">
              Collection
            </Link>
          </li>
          <li>
            <Link href="/about"
              className="text-domine-gray text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact"
              className="text-domine-gray text-sm tracking-[0.2em] uppercase hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-domine-black border-t border-domine-border p-8">
          <ul className="flex flex-col gap-6">
            {['Collection', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-domine-gray text-sm tracking-[0.2em] uppercase hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
