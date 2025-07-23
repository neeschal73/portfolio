import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Nischal Bhujel</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
