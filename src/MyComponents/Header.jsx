import React from 'react'

export default function Header(props) {
  let logoStyle = {
    width: "50px",
    height: "auto",

  }
  let container2Style = {
    width: " 50%",
    display: "ruby-text",
    fontFamily: 'fantasy',
    textDecoration: 'underline',
    background: "none",
    marginLeft: "25%"

  }
  let navbarBrandStyle = {
    textDecoration: 'underline'
  }

  return (
    <div className='container2' style={container2Style}>
      <nav className="navbar navbar-expand-lg navbar-light " >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={navbarBrandStyle}>{props.title}</a>
        <img className="logo" src="images\list.png" alt=" " style={logoStyle} />

        <span className="navbar-toggler-icon"></span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">



          </ul>
          {props.searchBar ? (<form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline -success" type="submit">Search</button>
          </form>) : (" ")}
        </div>
      </div>
      </nav>
    </div >
  )
}
