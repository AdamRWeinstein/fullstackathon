import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/rides'>Rides</NavLink>
        <NavLink to='/add-ride'>Ride Form</NavLink>
    </nav>
  );
};

export default NavBar;