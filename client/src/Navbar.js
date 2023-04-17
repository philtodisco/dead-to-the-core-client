import { Link } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import LogoImage from "./images/dttc-logo.png"

export const Navbar = () => {
  const navRef = useRef(null)

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return <nav className="nav">
    <Link to ="/" className="site-title">Dead To The Core</Link>
    <ul className="nav-links" ref={navRef}>
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