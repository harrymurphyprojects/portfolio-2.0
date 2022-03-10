import React from 'react'
import { LinkedIn, GitHub, Email } from '@material-ui/icons'

function Navbar() {
  return (
    <nav className="p-2">
      <ul className="nav nav-pills justify-content-evenly">
        <li className="btn">
          <a href="#about" className="nav-link active">About Me</a>
        </li>
        <li className="btn">
          <a href="#skills" className="nav-link active">Skills</a>
        </li>
        <li className="btn">
          <a href="#projects" className="nav-link active">Projects</a>
        </li>
        <li className="btn">
          <a href="#interests" className="nav-link active">Interests</a>
        </li>
        <li className="justify-content-right">
          <a className="btn" href="https://www.linkedin.com/in/harry-murphy-projects">
            <LinkedIn className="icon" fontSize="Large" />
          </a>
          <a className="btn" href="https://github.com/harrymurphyprojects">
            <GitHub className="icon" fontSize="Large" />
          </a> 
          <a className="btn" href="mailto:harryjmurphy1997@gmail.com">
            <Email className="icon" fontSize="Large" />
          </a>
        </li>
      </ul>
    </nav>
  )

}

export default Navbar