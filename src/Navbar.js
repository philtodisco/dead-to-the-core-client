import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  // State to control visibility of the navigation links
  const [showLink, setShowLink] = useState(false)
  // State to control visibility of the navigation bar
  const [showNavBar, setShowNavBar] = useState(false)

  // Function to toggle the visibility of the navigation bar and links
	const showNavbar = () => {
    setShowNavBar(!showNavBar)
    setShowLink(!showLink)
	};

  // Function to close the navigation bar and bring user to selected link
  const closeNavBar = () => {
    setShowNavBar(false)
    setShowLink(false)
  }
 
  const location = useLocation()
  const { pathname } = location
  console.log(pathname)

	return (
		<header>
      {/* Link to the home page */}
			<Link to ="/" className="site-title">Dead To The Core</Link>
      {/* Show mobile responive nav only when showNavBar state is true*/}
			<nav className={`nav ${showNavBar && "responsive_nav"}`}>
        <div className="social-icons">
        <Link to ="https://www.instagram.com/deadtothec0re/?hl=en" target="_blank"><i class="fa-brands fa-instagram"></i></Link>
        <Link to ="https://www.facebook.com/profile.php?id=100070371124362" target="_blank"><i class="fa-brands fa-facebook"></i></Link>
        <Link to ="https://www.youtube.com/channel/UCuYNA-6GJwz85fLj7iAYYbQ" target="_blank"><i class="fa-brands fa-youtube"></i></Link>
        </div>
        <div className="nav-links">
        {/* Show the "Home" link only when the showLink state is true */}
        {showLink && <Link to ="/" onClick={closeNavBar} className={pathname === '/' && 'selected'}>Home</Link>}
        <Link to ="/band" onClick={closeNavBar} className={pathname === '/band' && 'selected'}>Band</Link>
        <Link to ="/tour" onClick={closeNavBar} className={pathname === '/tour' && 'selected'}>Tour</Link>
        {/* <Link to ="/watch" onClick={closeNavBar} className={pathname === '/watch' && 'selected'}>Watch</Link> */}
        <Link to ="/contact" onClick={closeNavBar} className={pathname === '/contact' && 'selected'}>Contact</Link>
        {/* <Link to ="/shop" onClick={closeNavBar} className={pathname === '/shop' && 'selected'}>Shop</Link> */}
        </div>
        {/* Button to open to the responsive nav */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
      
      {/* Button to hide the responsive nav */}
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}
