/**
 * pages/Home.jsx — Home Page
 *
 * This page acts like a "container" that assembles all the section
 * components in the correct vertical order.
 *
 * Think of it like a skeleton:
 *   Navbar → Hero → About → Projects → Experience → Contact → Footer
 *
 * Each section is its own component defined in src/components/.
 */

import React from 'react'
import Navbar     from '../components/Navbar.jsx'
import Hero       from '../components/Hero.jsx'
import About      from '../components/About.jsx'
import Projects   from '../components/Projects.jsx'
import Experience from '../components/Experience.jsx'
import Contact    from '../components/Contact.jsx'
import Footer     from '../components/Footer.jsx'

function Home() {
  return (
    <>
      {/* Fixed top navigation */}
      <Navbar />

      {/* Main content — each section has its own id for scroll navigation */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </>
  )
}

export default Home
