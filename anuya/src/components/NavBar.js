import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/makeart">Make Art</NavLink></li>
        <li><NavLink to="/readmore">More</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;