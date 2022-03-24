import React from 'react'
import { Nav , NavLink , Bars , NavMenu} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>KalyaniSahu.</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
            <NavLink to="/" activestyle>
                About
            </NavLink>
            <NavLink to="/about" activestyle>
                Skills
            </NavLink>
            <NavLink to="/project" activestyle>
                Projects
            </NavLink>
            <NavLink to="/contact" activestyle>
                Contact
            </NavLink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar