
import React from 'react'

const Hero = ({ profile }) => (
  <section className='hero py-4'>
    <div className='p-4 p-md-5 rounded-4 glass-card'>
      <h1 className='display-6 fw-bold mb-1'>{profile.role}</h1>
      <p className='text-secondary mb-2'>{profile.title} · {profile.location}</p>
      <p className='lead'>{profile.summary}</p>
      <div className='d-flex flex-wrap gap-2 mt-3'>
        <a className='btn btn-gradient' href={profile.contact.linkedin} target='_blank' rel='noreferrer'>
          <i className='bi bi-linkedin me-2'></i> LinkedIn
        </a>
        <a className='btn btn-gradient' href={profile.contact.github} target='_blank' rel='noreferrer'>
          <i className='bi bi-github me-2'></i> GitHub
        </a>
        <a className='btn btn-outline-secondary' href={`mailto:${profile.contact.email}`}>
          <i className='bi bi-envelope me-2'></i> Email
        </a>
      </div>
    </div>
  </section>
)

export default Hero
