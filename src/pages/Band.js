import Bp1 from '../images/band1.jpg'

export default function Band() {
  return <div className="band-page">
  <div className='band-page-text-container'>
    <h1>About the band</h1>
    <p>Dead to the Core is Sam Bouve (Bass), Sean Galbraith (Guitar), and Phil Todisco (Guitar & Pedal Steel). This collective of North Shore original artists, songwriters, and producers came together in 2020 to honor the timeless catalog of the Grateful Dead with a fresh and innovative approach. Dead to the Core celebrates Jerry’s spirit with inspired playing, infused with unrestrained improvisations, and a real good time.
    </p>
  </div>
 <img id='band-photo-1' src={Bp1} alt="Grateful Dead tribute band performing live" img/>
  </div>
}