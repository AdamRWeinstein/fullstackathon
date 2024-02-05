import { Link } from "react-router-dom"

const Rides = ({rides}) => {
  return (
    <div>
    <h1>Rides</h1>
    {rides.map(ride => (
        <div >
        <Link to={`${ride._id}`}>
        <img src={ride.image} alt={ride.name} className="ride-image" />
        <h3>{ride.name}</h3>
        </Link>
        </div>

    ))}
</div>
  )
}

export default Rides
