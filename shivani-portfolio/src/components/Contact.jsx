/**
 * components/Contact.jsx — Contact Section
 *
 * Features:
 * - Left side: contact info (email, location, response time)
 * - Right side: contact form (Name, Email, Message)
 * - Form uses React useState to track input values (controlled components)
 * - On submit: shows a success message instead of page reload
 * - No backend — form data is handled in the browser only
 *
 * React concepts used:
 * - useState: manages formData (all fields) and submitted (boolean)
 * - onChange: updates state as user types (controlled input)
 * - onSubmit: prevents default browser reload, handles form logic
 */

import React, { useState } from 'react'

// Contact info shown on the left side
const CONTACT_INFO = [
  {
    icon: '📧',
    label: 'Email',
    value: 'shivanidiwakar1122@gmail.com',
    href: 'mailto:shivanidiwakar1122@gmail.com',
    isLink: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'India',
    isLink: false,
  },
  {
    icon: '⏱',
    label: 'Response Time',
    value: 'Usually within 24 hours',
    isLink: false,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/shivani',
    href: 'www.linkedin.com/in/shivani-diwakar-2409482b2',
    isLink: true,
  },
]

function Contact() {
  // ── State: tracks all three form fields together ──
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // ── State: shows success message after submit ──
  const [submitted, setSubmitted] = useState(false)

  /**
   * handleChange — runs every time user types in a field
   * e.target.name  → which field ('name', 'email', or 'message')
   * e.target.value → what the user typed
   *
   * We use the spread operator (...formData) to keep old values
   * and only update the one field that changed.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  /**
   * handleSubmit — runs when user clicks Send Message
   * e.preventDefault() stops the browser from reloading the page
   * In a real app, you'd send formData to a backend/email service here.
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to EmailJS, Formspree, or your own Node.js API
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form after 4 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{
        background:
          'linear-gradient(180deg, transparent, rgba(30,111,255,0.03), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section Heading ── */}
        <div className="text-center mb-14">
          <p className="section-label justify-center">04 — Contact</p>
          <h2 className="font-orbitron font-bold text-4xl">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Open to internships, full-time roles, and freelance projects.
            Let's build something great together!
          </p>
        </div>

        {/* ── Two column layout ── */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

          {/* ── LEFT: Contact Info ── */}
          <div className="space-y-5">
            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                {/* Icon box */}
                <div
                  className="w-11 h-11 rounded-xl bg-navy-700 border border-navy-500
                             flex items-center justify-center text-xl flex-shrink-0"
                >
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-wide text-slate-500 mb-0.5">
                    {item.label}
                  </div>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="text-cyan-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-slate-200">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Social icons row */}
            <div className="flex gap-3 pt-4">
              <SocialLink
                href="https://github.com/Shivani766"
                label="GitHub"
                icon={
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                }
              />
              <SocialLink
                href="www.linkedin.com/in/shivani-diwakar-2409482b2"
                label="LinkedIn"
                icon={
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="card">
            {/* Show success message OR the form */}
            {submitted ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name field */}
                <FormField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Shivani Diwakar"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                {/* Email field */}
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="shivanidiwakar1122@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                {/* Message textarea */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest
                                    text-slate-500 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy-800 border border-navy-500 rounded-lg
                               px-4 py-3 text-slate-200 text-sm font-sans
                               placeholder:text-slate-600 outline-none resize-none
                               focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(0,200,255,0.1)]
                               transition-all duration-300"
                  />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * FormField — Sub-component for a labelled text input
 *
 * Props:
 *   label       — displayed above the input
 *   name        — matches formData key
 *   type        — "text" or "email"
 *   placeholder — hint text inside the input
 *   value       — controlled value from formData state
 *   onChange    — handleChange function from parent
 *   required    — boolean for form validation
 */
function FormField({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-navy-800 border border-navy-500 rounded-lg
                   px-4 py-3 text-slate-200 text-sm font-sans
                   placeholder:text-slate-600 outline-none
                   focus:border-cyan-400 focus:shadow-[0_0_0_3px_rgba(0,200,255,0.1)]
                   transition-all duration-300"
      />
    </div>
  )
}

/**
 * SocialLink — Icon button linking to a social profile
 */
function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      className="w-10 h-10 rounded-lg border border-navy-500 bg-navy-700
                 flex items-center justify-center text-slate-400
                 hover:border-cyan-400 hover:text-cyan-400
                 hover:shadow-[0_0_15px_rgba(0,200,255,0.25)]
                 transition-all duration-300"
    >
      {icon}
    </a>
  )
}

/**
 * SuccessMessage — Shown after form is submitted
 */
function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12 text-center">
      <div className="text-5xl mb-4">🚀</div>
      <h3 className="font-orbitron font-bold text-xl text-cyan-400 mb-2">
        Message Sent!
      </h3>
      <p className="text-slate-400 text-sm">
        Thanks for reaching out. I'll get back to you within 24 hours!
      </p>
    </div>
 
  )
  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData), // ✅ use your state
  });

  const result = await res.text();
  alert(result);

  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
    setFormData({ name: "", email: "", message: "" });
  }, 4000);
};
}

export default Contact
