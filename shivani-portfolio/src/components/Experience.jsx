/**
 * components/Experience.jsx — Experience Section
 *
 * Displays work experience and learning milestones in a vertical timeline layout.
 *
 * Features:
 * - Vertical timeline with a glowing dot and connecting line
 * - Each entry shows: role, company, period, description, and tech tags
 * - Education card below the timeline
 *
 * Layout:
 *   Timeline line (left side) → Dots → Cards (right side)
 *
 * Key concept: Data is in an array at the top. We .map() over it to render
 * each timeline entry. Adding a new job = just add an object to the array.
 */

import React from 'react'

// ── Experience Data ──
const EXPERIENCES = [

  {
    type: 'work',
    role: 'Frontend Developer',
    company: 'Personal Projects & Freelance',
    period: '2023 – 2024',
    description:
      'Developed responsive web interfaces for 3+ projects. Used React with Tailwind CSS. Integrated third-party APIs and focused on component reusability and clean code.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    highlight: 'Freelance',
  },
  {
    type: 'learning',
    role: 'DSA & python,c-language Learner',
    company: 'Self-paced / Online Platforms',
    period: '2022 – Present',
    description:
      'Solved 200+ problems on LeetCode and GeeksForGeeks in Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming using Java. Strong foundation in algorithmic thinking.',
    tags: ['Java', 'DSA', 'LeetCode', 'Problem Solving'],
    highlight: 'Ongoing',
  },
]

// ── Education Data ──
const EDUCATION = {
  degree: 'B.Tech Computer Science',
  institution: 'IFTM University Moradabad',
  period: '2021 – 2025',
  highlights: ['Data Structures', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'],
}

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(0,200,255,0.025), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section Heading ── */}
        <div className="mb-14">
          <p className="section-label">03 — Experience</p>
          <h2 className="font-orbitron font-bold text-4xl">
            Work <span className="text-cyan-400">History</span>
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="relative pl-10 md:pl-14">

          {/* Vertical connecting line */}
          <div
            className="absolute left-3.5 md:left-5 top-2 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, #1e6fff, transparent)',
            }}
          />

          {/* Timeline entries */}
          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <ExperienceItem key={exp.role} exp={exp} />
            ))}
          </div>
        </div>

        {/* ── Education Card ── */}
        <div className="mt-16">
          <p className="section-label">Education</p>
          <div className="card">
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div>
                <h3 className="font-orbitron font-bold text-lg mb-1">
                  {EDUCATION.degree}
                </h3>
                <p className="text-cyan-400 font-mono text-sm">
                  {EDUCATION.institution}
                </p>
              </div>
              <span
                className="font-mono text-xs text-slate-400 border border-navy-500
                           rounded-full px-3 py-1"
              >
                {EDUCATION.period}
              </span>
            </div>

            {/* Core subjects */}
            <div className="flex flex-wrap gap-2 mt-4">
              {EDUCATION.highlights.map((subject) => (
                <span key={subject} className="badge-gold">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * ExperienceItem — Sub-component
 *
 * Renders one timeline entry. Accepts an `exp` prop object.
 *
 * Props:
 *   exp.role        — job title
 *   exp.company     — company or platform name
 *   exp.period      — date range
 *   exp.description — what was done
 *   exp.tags        — tech used
 *   exp.highlight   — small pill label (Current / Freelance / Ongoing)
 */
function ExperienceItem({ exp }) {
  return (
    <div className="relative flex gap-5">

      {/* ── Timeline dot ── */}
      <div
        className="absolute -left-10 md:-left-14 w-3 h-3 rounded-full bg-blue-500
                   border-2 border-navy-900 mt-1.5 flex-shrink-0
                   shadow-[0_0_10px_rgba(30,111,255,0.7)]"
      />

      {/* ── Card content ── */}
      <div className="card flex-1">
        {/* Header row */}
        <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
          <div>
            <h3 className="font-orbitron font-bold text-base">
              {exp.role}
            </h3>
            <p className="text-cyan-400 font-mono text-xs mt-1">
              {exp.company}
            </p>
          </div>

          {/* Period + highlight pill */}
          <div className="flex flex-col items-end gap-1">
            <span
              className="font-mono text-xs text-slate-400 border border-navy-500
                         rounded-full px-3 py-0.5"
            >
              {exp.period}
            </span>
            <span
              className="font-mono text-xs text-cyan-400 border border-cyan-400/30
                         bg-cyan-400/8 rounded px-2 py-0.5"
            >
              {exp.highlight}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span key={tag} className="badge-blue">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
