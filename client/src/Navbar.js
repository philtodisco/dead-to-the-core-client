import { Link } from "react-router-dom"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
	const navRef = useRef();
  const [showLink, setShowLink] = useState(false)

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    setShowLink(!showLink)
	};

	return (
		<header>
			<Link to ="/" className="site-title">Dead To The Core</Link>
			<nav className="nav" ref={navRef}>
        {showLink && <Link to ="/">Home</Link>}
        <Link to ="/band">Band</Link>
        <Link to ="/tour">Tour</Link>
        <Link to ="/gallery">Gallery</Link>
        <Link to ="/contact">Contact</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}


