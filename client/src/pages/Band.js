import axios from 'axios'


export default function Band() {
  const getAllTourDates = () => {
    // testing using randomuser api
    axios.get('https://dttc-api.herokuapp.com/tourDates', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <button onClick={getAllTourDates}>Test</button>
  )
}
