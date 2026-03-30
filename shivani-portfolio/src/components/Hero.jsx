/**
 * components/Hero.jsx — Hero / Landing Section
 *
 * This is the first thing visitors see. It introduces Shivani.
 *
 * Features:
 * - Animated heading with staggered fade-up (using Tailwind custom animations)
 * - Animated "terminal" card showing her skills in JSON format
 * - Floating animation on the terminal card
 * - Rotating decorative rings around the card
 * - Stats row (projects, skills, etc.)
 * - Two CTA buttons: View Projects + Contact Me
 * - Blinking cursor animation next to the role text
 *
 * No hooks needed here — pure presentational component.
 */

import React from 'react'

// Stats shown at the bottom of the hero section
const STATS = [
  { value: '3+',  label: 'Projects Built' },
  { value: '6+',  label: 'Technologies' },
  { value: 'MERN', label: 'Core Stack' },
  { value: 'DSA', label: 'Problem Solving' },
]

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* ── Main Grid: Left (text) + Right (terminal card) ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text Content ── */}
          <div>
            {/* Small label above name */}
            <p className="section-label animate-fade-up">
              software Engineer || full stack developer
            </p>

            {/* Main heading — name */}
            <h1
              className="font-orbitron font-black leading-tight mb-4 animate-fade-up-delay-1"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.8rem)' }}
            >
              Hi, I'm{' '}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-400
                           bg-clip-text text-transparent"
              >
                Shivani<br />Diwakar
              </span>
            </h1>

            {/* Role line with blinking cursor */}
            <p className="font-mono text-slate-400 text-base mb-6 animate-fade-up-delay-2">
              &gt; Full Stack Developer · React · Node.js
              {/* Blinking cursor */}
              <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-1 align-middle animate-blink" />
            </p>

            {/* Short intro paragraph */}
            <p className="text-slate-400 leading-relaxed max-w-md mb-8 animate-fade-up-delay-3">
              I build scalable, full-stack web applications using the MERN
              stack. Passionate about clean code, great UX, and solving
              complex problems with elegant solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up-delay-4">
              <a href="#projects" className="btn-primary">
                View Projects →
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </div>

            {/* Skill badges row */}
            <div className="flex flex-wrap gap-2 animate-fade-up-delay-4">
              {['React', 'Node.js', 'Express', 'MongoDB', 'Java', 'DSA'].map(
                (skill) => (
                  <span key={skill} className="badge-blue">
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ── RIGHT: Terminal JSON Card ── */}
          <div className="relative flex justify-center animate-fade-up-delay-2">

            {/* Decorative rotating rings */}
            <div
              className="absolute rounded-full border border-dashed border-cyan-400/15 pointer-events-none"
              style={{
                width: '340px', height: '340px',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'spin 20s linear infinite',
              }}
            />
            <div
              className="absolute rounded-full border border-dashed border-blue-500/10 pointer-events-none"
              style={{
                width: '290px', height: '290px',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'spin 15s linear infinite reverse',
              }}
            />

            {/* Terminal card */}
            <div
              className="relative z-10 w-72 bg-navy-800 border border-navy-500
                         rounded-2xl p-6 font-mono text-sm leading-loose
                         shadow-[0_40px_80px_rgba(0,0,0,0.5)]
                         animate-float"
            >
              {/* Traffic light dots */}
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_6px_#facc15]" />
                <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
                <span className="ml-2 text-slate-500 text-xs">shivani.json</span>
              </div>

              {/* JSON-style content */}
              <div className="text-slate-500">{'{'}</div>
              <div className="pl-4">
                <div>
                  <span className="text-blue-400">"name"</span>
                  {': '}
                  <span className="text-yellow-400">"Shivani Diwakar"</span>,
                </div>
                <div>
                  <span className="text-blue-400">"role"</span>
                  {': '}
                  <span className="text-yellow-400">"MERN Developer"</span>,
                </div>
                <div>
                  <span className="text-blue-400">"stack"</span>
                  {': ['}
                  <span className="text-green-400">"React"</span>,{' '}
                  <span className="text-green-400">"Node"</span>
                  {'],'}
                </div>
                <div>
                  <span className="text-blue-400">"dsa"</span>
                  {': '}
                  <span className="text-cyan-400">true</span>,
                </div>
                <div>
                  <span className="text-blue-400">"available"</span>
                  {': '}
                  <span className="text-green-400">true</span>
                </div>
              </div>
              <div className="text-slate-500">{'}'}</div>
              <div className="mt-3 text-slate-500 text-xs">
                {'// Open to opportunities ✓'}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 border border-navy-500 rounded-xl bg-navy-700
                         hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(0,200,255,0.12)]
                         transition-all duration-300"
            >
              <div
                className="font-orbitron font-black text-2xl mb-1 bg-gradient-to-r
                           from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                {stat.value}
              </div>
              <div className="text-slate-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/*
        Inline style for spin animation — Tailwind doesn't have spin-slow built in.
        We add it here directly since it's a one-off decorative element.
      */}
      <style>{`
        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default Hero
