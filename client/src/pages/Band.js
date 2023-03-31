import axios from 'axios'


export default function Band() {
  const getAllTourDates = () => {
    // testing using randomuser api
    axios.get('https://randomuser.me/api/')
    .then(res => {
      console.log(res.data.results[0])
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <button onClick={getAllTourDates}>Test</button>
  )
}
