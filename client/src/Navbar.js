import { Link } from "react-router-dom"

export const Navbar = () => {
  return <nav className="nav">
    <Link to ="/" className="site-title">Dead To The Core</Link>
    <ul>
            <Link to ="/band">Band</Link>
            <Link to ="/tour">Tour</Link>
            <Link to ="/gallery">Gallery</Link>
            <Link to ="/contact">Contact</Link>
    </ul>
    </nav>
}
