import React from 'react'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/home">Home</a>
      <a className="nav-item nav-link" href="/about">About</a>
      <a className="nav-item nav-link" href="/contact">Contact</a>
      <a className="nav-item nav-link" href="/user/add">ADD USER</a>
      <a className="nav-item nav-link" href="/user/show">SHOW USER</a>
    </div>
  </div>
</nav>
    
  )
}

export default NavBar;