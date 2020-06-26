import React from 'react'
import {Link} from  'react-router-dom'
const Navbar = (props) => {
    return (
    <div>
       <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo left">My-Personal-App</Link>
      <ul id="nav-mobile" className="right">
     <b> <li><Link to="/profile">profile</Link></li></b>
        <b><li><Link to="/singup">SingUp</Link></li></b>
        <b><li><Link to="/singin">Login</Link></li></b>
        <b><li><Link to="/createpost">CreatePost</Link></li></b>
      </ul>
    </div>
  </nav>   
    </div>
    );
}
export default Navbar;