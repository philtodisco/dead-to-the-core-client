import Hero from "../images/hero-image.png"
import { Link } from "react-router-dom"


export default function Home() {
  return <div className="home-page">
    <img id="hero-image" src={Hero} alt="grateful dead logo" img/>
    <div className="main-text-container">
      <h1 className="home-main-text">We are returning to Off Cabot in Beverly, MA on February 2nd. Find your tickets at the link below!</h1>
      <Link to ="https://www.etix.com/ticket/p/64890436/dead-to-the-core-with-special-guests-bottles-and-cans-beverly-off-cabot-comedy-and-events" id="main-text-btn" target="_blank" rel="noopener noreferrer">Tickets</Link>
    </div>
  </div>
}

