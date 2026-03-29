/**
 * components/Navbar.jsx — Navigation Bar
 *
 * Features:
 * - Fixed at the top of the screen (always visible while scrolling)
 * - Glassmorphism background (dark blur effect)
 * - Desktop: horizontal nav links
 * - Mobile: hamburger icon that toggles a dropdown menu
 * - Smooth scroll to sections when links are clicked
 *
 * React hooks used:
 * - useState: to track whether the mobile menu is open or closed
 */

import React, { useState } from 'react'

// Nav links data — label shows in the menu, href is the section id
const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

function Navbar() {
  // Controls mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-xl border-b border-navy-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <a
          href="#home"
          className="font-orbitron font-black text-lg text-cyan-400 tracking-widest
                     hover:text-blue-400 transition-colors duration-300"
        >
          &lt;<span className="text-blue-400">SD</span> /&gt;
        </a>

        {/* ── Desktop Navigation Links ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase text-slate-400
                         hover:text-cyan-400 transition-colors duration-300
                         relative after:absolute after:bottom-0 after:left-0 after:right-0
                         after:h-px after:bg-cyan-400 after:scale-x-0 after:transition-transform
                         after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Hire Me Button (Desktop) ── */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Hire Me →
        </a>

        {/* ── Hamburger Icon (Mobile only) ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {/* Three bars — middle one fades when open */}
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300
                            ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300
                            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300
                            ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-navy-800/95 backdrop-blur-xl border-t border-navy-500
                        px-6 py-6 flex flex-col gap-5 animate-fade-up">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="font-mono text-sm tracking-widest uppercase text-slate-300
                         hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          {/* Mobile Hire Me button */}
          <a href="#contact" onClick={handleLinkClick} className="btn-primary w-fit">
            Hire Me →
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
