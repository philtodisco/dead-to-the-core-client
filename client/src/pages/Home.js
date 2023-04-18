import Hero from "../images/hero-image.png"
import { Link } from "react-router-dom"

export default function Home() {
  return <div className="home-page">
    <img id="hero-image" src={Hero} alt="grateful dead logo" img/>
    <div className="main-text-container">
      <h1 className="home-main-text">A Boston based tribute breaking the boundaries of the Grateful Dead's timeless catalog</h1>
      <Link to ="/tour" id="main-text-btn">Upcoming Shows</Link>
    </div>
  </div>
}

