import YouTube from 'react-youtube'


export default function Watch() {

   const videoId = 'FZYtJnueI-c'

    return <div className='watch-page'>
      <div className='video-container'>
        <YouTube videoId={videoId} className='live-video'/>
      </div>
    </div>
  
  }