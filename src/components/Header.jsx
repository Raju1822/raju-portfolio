
import React from 'react'

const toggleTheme = () => {
  const root = document.documentElement
  const current = root.getAttribute('data-bs-theme') || 'dark'
  const next = current === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-bs-theme', next)
  localStorage.setItem('theme', next)
}

const Header = ({ name }) => (
  <nav className='navbar navbar-expand-lg sticky-top bg-body-tertiary border-bottom'>
    <div className='container'>
      <a className='navbar-brand d-flex align-items-center gap-2' href='#'>
        <span className='d-inline-block rounded-2' style={{width:28,height:28,backgroundImage:'linear-gradient(135deg,#6610f2,#0d6efd)'}}></span>
        <strong>{name}</strong>
      </a>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav' aria-controls='nav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='nav'>
        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center'>
          <li className='nav-item'><a className='nav-link' href='#skills'>Skills</a></li>
          <li className='nav-item'><a className='nav-link' href='#experience'>Experience</a></li>
          <li className='nav-item'><a className='nav-link' href='#projects'>Projects</a></li>
          <li className='nav-item'><a className='nav-link' href='#education'>Education</a></li>
          <li className='nav-item'><a className='nav-link' href='#resume'>Resume</a></li>
          <li className='nav-item'><a className='nav-link' href='#contact'>Contact</a></li>
          <li className='nav-item ms-lg-3'>
            <button className='btn btn-outline-secondary theme-toggle' onClick={toggleTheme}>
              <i className='bi bi-brightness-high'></i> Theme
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
