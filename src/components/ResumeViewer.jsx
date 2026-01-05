
import React from 'react'

const ResumeViewer = () => (
  <div className='card glass-card'>
    <div className='card-body'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h2 className='h5 mb-0'>Resume</h2>
        <div className='btn-group'>
          <a className='btn btn-outline-secondary' href='/resume.pdf' target='_blank' rel='noreferrer'>
            <i className='bi bi-box-arrow-up-right me-2'></i>Open in new tab
          </a>
          <a className='btn btn-gradient' href='/resume.pdf' download>
            <i className='bi bi-download me-2'></i>Download PDF
          </a>
        </div>
      </div>
      <div className='ratio ratio-16x9'>
        <iframe className='pdf-frame' src='/resume.pdf#toolbar=1&navpanes=0' title='Resume PDF'></iframe>
      </div>
      <p className='text-secondary mt-2 mb-0'>If the inline viewer doesn’t load, use “Open in new tab.”</p>
    </div>
  </div>
)

export default ResumeViewer
