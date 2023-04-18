import { Link } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";


export const Navbar = () => {
  const [expanded, setExpanded] = useState(false)
  const navRef = useRef(null)

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
    setExpanded(!expanded)
  }

  return <nav className="nav">
    <Link to ="/" className="site-title">Dead To The Core</Link>
    <ul className="nav-links" ref={navRef}>
      {expanded && <Link to="/">Home</Link>}
      <Link to ="/band">Band</Link>
      <Link to ="/tour">Tour</Link>
      <Link to ="/gallery">Gallery</Link>
      <Link to ="/contact">Contact</Link>
      <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
    </ul>
    <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
    </nav>
}