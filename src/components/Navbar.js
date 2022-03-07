import React from 'react'
import { LinkedIn, GitHub, Email } from '@material-ui/icons'

function Navbar() {
  return (
    <nav className="p-2">
      <ul className="nav nav-pills justify-content-evenly">
        <li className="text-decoration-none nav-item ">
          <a href="#about" className="nav-link active">About Me</a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link active">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link active">Projects</a>
        </li>
        <li className="justify-content-right">
          <a className="btn" href="https://www.linkedin.com/in/harry-murphy-projects">
            <LinkedIn fontSize="Large" />
          </a>
          <a className="btn" href="https://github.com/harrymurphyprojects">
            <GitHub fontSize="Large" />
          </a> 
          <a className="btn" href="mailto:harryjmurphy1997@gmail.com">
            <Email fontSize="Large" />
          </a>
        </li>
      </ul>
    </nav>
  )

}

export default Navbar