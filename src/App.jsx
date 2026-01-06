
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import ResumeViewer from './components/ResumeViewer'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    fetch('/src/data/profile.json').then(r => r.json()).then(setProfile)
  }, [])

  if (!profile) return <div className='container py-5'>Loading…</div>

  return (
    <>
      <Header name={profile.name} />
      <main className='container'>
        <Hero profile={profile} />
        <section id='skills' className='my-4'>
          <Skills items={profile.skills} />
        </section>
        <section id='experience' className='my-4'>
          <Experience list={profile.experience} />
        </section>
        <section id='projects' className='my-4'>
          <Projects list={profile.projects} />
        </section>
        <section id='education' className='my-4'>
          <Education list={profile.education} />
        </section>
        <section id='resume' className='my-4 overflow-auto'>
          <ResumeViewer />
        </section>
        <section id='contact' className='my-4'>
          <Contact info={profile.contact} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
