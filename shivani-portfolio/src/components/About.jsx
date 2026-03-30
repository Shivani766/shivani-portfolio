/**
 * components/About.jsx — About Me Section
 *
 * Features:
 * - Left column: bio text + tech skill badge grid
 * - Right column: personal info card (email, location, GitHub, etc.)
 * - Animated skill progress bars showing proficiency level
 *
 * Key concept: Data is defined in arrays at the top of the file.
 * We map() over them to generate JSX — this keeps the JSX clean
 * and makes it easy to add/remove skills or info items.
 */

import React from 'react'

// Personal info displayed in the card on the right
const PERSONAL_INFO = [
  { label: 'Full Name',  value: 'Shivani Diwakar' },
  { label: 'Role',       value: 'full Stack Developer and software engineer' },
  { label: 'Email',      value: 'shivanidiwakar1122@gmail.com', isLink: true, href: 'mailto:shivanidiwakar1122@gmail.com' },
  { label: 'Location',   value: 'India' },
  { label: 'GitHub',     value: 'github.com/shivani', isLink: true, href: 'https://github.com/Shivani766' },
  { label: 'LinkedIn',   value: 'linkedin.com/in/shivani', isLink: true, href: 'https://www.linkedin.com/in/shivani-diwakar-2409482b2' },
  { label: 'Education',  value: 'B.Tech(CS)' },
  { label: 'Status',     value: 'Available', isStatus: true },
]

// Skills with proficiency percentage (shown as animated bars)
const SKILLS = [
  { name: 'React.js',   pct: 88, color: 'from-blue-500 to-cyan-400' },
  { name: 'Node.js',    pct: 82, color: 'from-blue-500 to-cyan-400' },
  { name: 'MongoDB',    pct: 80, color: 'from-blue-500 to-cyan-400' },
  { name: 'Express.js', pct: 84, color: 'from-blue-500 to-cyan-400' },
  { name: 'python',     pct: 75, color: 'from-yellow-400 to-orange-400' },
  { name: 'DSA',        pct: 78, color: 'from-green-400 to-cyan-400' },
]

// Tech stack shown as clickable-looking badge chips
const TECH_BADGES = [
  { label: 'JavaScript',  cls: 'badge-blue' },
  { label: 'React',       cls: 'badge-blue' },
  { label: 'Node.js',     cls: 'badge-cyan' },
  { label: 'Express',     cls: 'badge-cyan' },
  { label: 'MongoDB',     cls: 'badge-green' },
  { label: 'MySQL',       cls: 'badge-gold' },
  { label: 'python',        cls: 'badge-gold' },
  { label: 'DSA',         cls: 'badge-green' },
  { label: 'Git/GitHub',  cls: 'badge-blue' },
  { label: 'REST APIs',   cls: 'badge-cyan' },
  { label: 'Tailwind CSS',cls: 'badge-blue' },
  { label: 'OS · DBMS',  cls: 'badge-gold' },
]

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(30,111,255,0.03), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section Heading ── */}
        <div className="mb-14">
          <p className="section-label">01 — About Me</p>
          <h2 className="font-orbitron font-bold text-4xl">
            Building the Web,{' '}
            <span className="text-cyan-400">Line by Line</span>
          </h2>
        </div>

        {/* ── Two column grid ── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── LEFT: Bio + Skills ── */}
          <div>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with strong expertise in
              the <span className="text-cyan-400 font-semibold">MERN stack</span> —
              MongoDB, Express.js, React, and Node.js. I build end-to-end web
              applications that are fast, scalable, and user-friendly.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Beyond the web stack, I have solid problem-solving skills in{' '}
              <span className="text-cyan-400 font-semibold">
                Data Structures &amp; Algorithms
              </span>{' '}
              using Java, and a strong foundation in Computer Science fundamentals
              like OS, DBMS, and Computer Networks.
            </p>

            {/* Tech badge grid */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TECH_BADGES.map((b) => (
                <span key={b.label} className={b.cls}>
                  {b.label}
                </span>
              ))}
            </div>

            {/* Skill progress bars */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs tracking-widest uppercase text-slate-500 mb-4">
                Proficiency Levels
              </h3>
              {SKILLS.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Personal Info Card ── */}
          <div className="card">
            {/* Avatar placeholder + name */}
            <div className="flex items-center gap-4 mb-6">
              {/* Initials avatar */}
              <div
                className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400
                           flex items-center justify-center font-orbitron font-black text-navy-900
                           text-lg flex-shrink-0"
              >
                SD
              </div>
              <div>
                <div className="font-orbitron font-bold text-base">
                  Shivani Diwakar
                </div>
                <div className="font-mono text-xs text-cyan-400 mt-0.5">
                   software Developer
                </div>
              </div>
              {/* Availability dot */}
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                <span className="text-green-400 text-xs">Available</span>
              </div>
            </div>

            {/* Info rows */}
            <div className="divide-y divide-navy-500">
              {PERSONAL_INFO.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center py-3"
                >
                  {/* Label */}
                  <span className="font-mono text-xs uppercase tracking-wide text-slate-500">
                    {item.label}
                  </span>

                  {/* Value — link, status badge, or plain text */}
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-cyan-400 text-sm hover:text-blue-400
                                 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : item.isStatus ? (
                    <span className="flex items-center gap-1.5 text-green-400 text-sm font-semibold">
                      <span className="w-2 h-2 rounded-full bg-green-400
                                       shadow-[0_0_8px_#4ade80]" />
                      {item.value}
                    </span>
                  ) : (
                    <span className="text-slate-200 text-sm font-medium">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * SkillBar — Sub-component
 *
 * Renders a single skill row with a label, percentage, and animated bar.
 * Accepts a `skill` object as a prop: { name, pct, color }
 *
 * Props usage example:
 *   <SkillBar skill={{ name: 'React.js', pct: 88, color: 'from-blue-500 to-cyan-400' }} />
 */
function SkillBar({ skill }) {
  return (
    <div>
      {/* Row: skill name on left, percentage on right */}
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        <span className="font-mono text-xs text-cyan-400">{skill.pct}%</span>
      </div>

      {/* Bar background track */}
      <div className="h-1.5 bg-navy-600 rounded-full overflow-hidden">
        {/* Filled bar — width comes from skill.pct */}
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}
                      transition-all duration-1000`}
          style={{ width: `${skill.pct}%` }}
        />
      </div>
    </div>
  )
}

export default About
