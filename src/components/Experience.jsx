
import React from 'react'

const ExperienceCard = ({ role, company, period, bullets }) => (
  <div className='card h-100 glass-card'>
    <div className='card-body'>
      <h3 className='h6'>{role} · {company}</h3>
      <div className='text-secondary mb-2'>{period}</div>
      <ul className='mb-0'>
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  </div>
)

const Experience = ({ list = [] }) => (
  <div className='row g-3'>
    {list.map((e, i) => (
      <div className='col-12 col-md-6' key={i}>
        <ExperienceCard {...e} />
      </div>
    ))}
  </div>
)

export default Experience
