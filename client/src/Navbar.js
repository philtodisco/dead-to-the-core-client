import { Link } from "react-router-dom"
import LogoImage from "./images/dttc-logo.png"

export const Navbar = () => {
  return <nav className="nav">
    <Link to ="/" className="site-title"><img id="logo-image" src={LogoImage} alt="logo" /></Link>
    <ul className="nav-links">
      <Link to ="/band">Band</Link>
      <Link to ="/tour">Tour</Link>
      <Link to ="/gallery">Gallery</Link>
      <Link to ="/contact">Contact</Link>
    </ul>
    </nav>
}

