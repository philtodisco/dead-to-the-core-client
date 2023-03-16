import { Link } from "react-router-dom"

export const Navbar = () => {
  return <nav className="nav">
    <div className="title-container">
    <Link to ="/" className="site-title">Dead To The Core</Link>
    <p id="title-sub">Boston based Grateful Dead Tribute</p>
    </div>
    <ul className="nav-links">
            <Link to ="/band">Band</Link>
            <Link to ="/tour">Tour</Link>
            <Link to ="/gallery">Gallery</Link>
            <Link to ="/contact">Contact</Link>
    </ul>
    </nav>
}

