
import React from 'react'

const Contact = ({ info }) => (
  <div className='card glass-card'>
    <div className='card-body'>
      <h2 className='h5 mb-3'>Contact</h2>
      <ul className='list-unstyled d-grid gap-2'>
        <li><i className='bi bi-envelope me-2'></i><a href={`mailto:${info.email}`}>{info.email}</a></li>
        <li><i className='bi bi-telephone me-2'></i><span>{info.phone}</span></li>
        <li><i className='bi bi-linkedin me-2'></i><a href={info.linkedin} target='_blank' rel='noreferrer'>LinkedIn</a></li>
        <li><i className='bi bi-github me-2'></i><a href={info.github} target='_blank' rel='noreferrer'>GitHub</a></li>
      </ul>
    </div>
  </div>
)

export default Contact
