import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My First Blog</h1>
      <div className="links">
        
        <Link to="/">Bloglist</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/createuser">Sign Up</Link>
        
      </div>
    </nav>
  );
}
 
export default Navbar;