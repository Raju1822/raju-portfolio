
import React from 'react'

const ProjectCard = ({ name, desc, stack, highlights, link }) => (
  <div className='card h-100 glass-card'>
    <div className='card-body'>
      <h3 className='h6'>{name}</h3>
      <p className='text-secondary mb-2'>{desc}</p>
      <div className='mb-2'>
        {stack.map((s, i) => <span key={i} className='badge text-bg-info badge-stack'>{s}</span>)}
      </div>
      <ul className='mb-3'>
        {highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
      {link && <a className='btn btn-outline-secondary' href={link} target='_blank' rel='noreferrer'>View Repo →</a>}
    </div>
  </div>
)

const Projects = ({ list = [] }) => (
  <div className='row g-3'>
    {list.map((p, i) => (
      <div className='col-12 col-md-6' key={i}>
        <ProjectCard {...p} />
      </div>
    ))}
  </div>
)

export default Projects
