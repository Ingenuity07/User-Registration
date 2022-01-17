import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = ({user,setUser}) => {
  const navigate = useNavigate();
const handleLogout=(e)=>{
  e.preventDefault();

  fetch('http//localhost:8000/user/logout').then((res) => {

      setUser(null)

      navigate('/')
  }).catch((err => {
      console.log(err.message)
  }))
}


let message="User Registration UI"
let link='/'

if(user)
message="DashBoard"
else
message="User Registration UI"


if(user)
link="/user"
else
link="/"

  return (
    <div className="sticky" >
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={link} > <a className="navbar-brand" href="#">{message}</a></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
            </ul>
          </div>
          {user&&<button class=" my-2 my-sm-0" type="submit" onClick={handleLogout}>Logout</button>}
        </div>
      </nav>

    </div>
  );
}

export default Navbar;