
import React from 'react'

const EducationCard = ({ school, degree, period, grade }) => (
  <div className='card h-100 glass-card'>
    <div className='card-body'>
      <h3 className='h6'>{school}</h3>
      <div className='text-secondary'>{degree} · {period}</div>
      {grade && <div className='mt-2'>Grade: <strong>{grade}</strong></div>}
    </div>
  </div>
)

const Education = ({ list = [] }) => (
  <div className='row g-3'>
    {list.map((e, i) => (
      <div className='col-12 col-md-6' key={i}>
        <EducationCard {...e} />
      </div>
    ))}
  </div>
)

export default Education
