/**
 * components/Projects.jsx — Projects Section
 *
 * Displays Shivani's three main projects as cards.
 *
 * Features:
 * - Project data is stored in a PROJECTS array (easy to edit/add)
 * - Each project card shows: icon, title, description, tech tags, links
 * - Hover effect: card lifts + top accent line appears
 * - GitHub and Live Demo links (both optional)
 *
 * Key React concept: We define data in an array, then use .map() to
 * render a <ProjectCard> component for each item. This is cleaner
 * than copy-pasting the same JSX three times.
 */

import React from 'react'

// ── Project Data ──
// Edit these objects to change your projects.
const PROJECTS = [
  {
    icon: '🛒',
    title: 'E-Commerce Website',
    description:
      'A full-stack e-commerce platform with product listings, cart management, user authentication, and order tracking. Built with the MERN stack and integrated Razorpay for payments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS'],
    tagStyle: 'badge-cyan',
    github: 'https://github.com/Shivani766',
    live: '#',
    highlight: 'Full MERN Stack',
  },
  {
    icon: '✅',
    title: 'to do List App',
    description:
      'A responsive task management application with CRUD operations, task categorization, priority levels, and local storage persistence. Features clean animations and a minimal UI.',
    tags: ['React', 'JavaScript', 'localStorage', 'CSS Modules'],
    tagStyle: 'badge-blue',
    github: 'https://github.com',
    live: '#',
    highlight: 'React + Hooks',
  },
  {
    icon: '📝',
    title: 'Notes Exchange Platform',
    description:
      'A collaborative platform where students can upload, share, and download academic notes. Features file upload, search by subject, user profiles, and rating system.',
    tags: ['React', 'Node.js', 'MongoDB', 'Multer', 'Express', 'JWT'],
    tagStyle: 'badge-green',
    github: 'https://github.com/Shivani766',
    live: '#',
    highlight: 'Full Stack + File Upload',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Heading ── */}
        <div className="text-center mb-14">
          <p className="section-label justify-center">02 — Projects</p>
          <h2 className="font-orbitron font-bold text-4xl">
            Featured <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Real-world projects built to solve real problems. Each one
            demonstrates full-stack thinking — from database to UI.
          </p>
        </div>

        {/* ── Projects Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm mb-4">
            Want to see more?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            {/* GitHub icon */}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

/**
 * ProjectCard — Sub-component
 *
 * Renders a single project card. Accepts a `project` prop object.
 *
 * Props:
 *   project.icon        — emoji icon shown at top
 *   project.title       — project name
 *   project.description — what the project does
 *   project.tags        — array of tech tags
 *   project.tagStyle    — CSS class for badges (badge-cyan / badge-blue / badge-green)
 *   project.highlight   — short label shown as a pill in top-right
 *   project.github      — GitHub link
 *   project.live        — live demo link
 */
function ProjectCard({ project }) {
  return (
    <div className="card flex flex-col">

      {/* ── Top row: icon + highlight pill ── */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl">{project.icon}</span>
        <span className="font-mono text-xs text-cyan-400 border border-cyan-400/30
                         bg-cyan-400/8 px-2 py-0.5 rounded">
          {project.highlight}
        </span>
      </div>

      {/* ── Title ── */}
      <h3 className="font-orbitron font-bold text-lg mb-3">
        {project.title}
      </h3>

      {/* ── Description ── */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* ── Tech Tags ── */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className={project.tagStyle}>
            {tag}
          </span>
        ))}
      </div>

      {/* ── Links: GitHub + Live Demo ── */}
      <div className="flex gap-4 pt-4 border-t border-navy-500">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-slate-400
                     hover:text-cyan-400 transition-colors duration-300"
        >
          {/* GitHub icon */}
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
          </svg>
          Source Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-slate-400
                     hover:text-blue-400 transition-colors duration-300"
        >
          {/* External link icon */}
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default Projects
