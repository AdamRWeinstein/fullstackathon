import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Client from "../services/api"

const RideDetail = ({rides}) => {
    let { id } = useParams()
    const [ride, setRide] = useState('')
    useEffect(() => {
        const getRide = async () => {
         let res = await Client.get(`rides/${id}`)
         setRide(res.data)
 
        }
        getRide()
     }, [rides, id])


  return ride ? (
    <div>
      <h1>{ride.name}</h1>
      <div>
       <img src={ride.image} alt={ride.name} className="ride-image" />
       <div>
       <h3>{ride.description}</h3>
       </div>
       <div>
        <h2>Ride Info</h2>
        <p>Thrill Level :{ride.thrill}</p>
        <p>Height Requirement :{ride.height}</p>
        <p>Pass Requirement :{ride.pass}</p>
        </div>
      </div>
    </div>
  ): null
}

export default RideDetail
