import { Link } from "react-router-dom"
import Logo from "./images/dttc-logo.png"

export const Navbar = () => {
  return <nav className="nav">
    <Link to ="/" className="site-title"> 
      <img id="logo" src={Logo}
      alt="rock concert"/>
    </Link>
    <ul className="nav-links">
            <Link to ="/band">Band</Link>
            <Link to ="/tour">Tour</Link>
            <Link to ="/gallery">Gallery</Link>
            <Link to ="/contact">Contact</Link>
    </ul>
    </nav>
}

