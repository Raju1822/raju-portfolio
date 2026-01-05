
import React from 'react'

const Skills = ({ items = [] }) => (
  <div className='card glass-card'>
    <div className='card-body'>
      <h2 className='h5 mb-3'>Technical Skills</h2>
      <div>
        {items.map((s, i) => (
          <span key={i} className='badge text-bg-primary badge-stack'>{s}</span>
        ))}
      </div>
    </div>
  </div>
)

export default Skills
