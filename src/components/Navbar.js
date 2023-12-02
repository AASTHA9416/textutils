import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>

        </ul>
       
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toogleMode('primary')}} ></div>
        </div> 
        <div className="d-flex">
          <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toogleMode('success')}}></div>
        </div> 
        <div className="d-flex">
          <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toogleMode('danger')}}></div>
        </div> 
        <div className="d-flex">
          <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toogleMode('warning')}}></div>
        </div> 
        <div className="d-flex">
          <div className="bg-light rounded mx-2" style={{height:'30px',width:'30px', cursor:'pointer', border:'1px solid black'}} onClick={()=>{props.toogleMode('light')}}></div>
        </div> 
        <div className="d-flex">
          <div className="bg-dark rounded mx-2" style={{height:'30px',width:'30px', cursor:'pointer' }} onClick={()=>{props.toogleMode('dark')}}></div>
        </div> 
      {/* <div className={`form-check form-switch text-${props.mode==='light' ? 'black' :'white' }`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toogleMode(null)}} />
  <label className="form-check-label" for="flexSwitchCheckDefault ">Toogle Mode</label>
</div> */}
{/* <div className={`form-check form-switch text-${props.changeorange==='norange' ? 'black' :'orange' }`}>      
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.showOrange}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.changeorange==='orange' ? 'Enable white' :'Enable orange'}</label>
</div>
<div className={`form-check form-switch text-${props.changepink==='npink' ? 'black' :'pink' }`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.showPink}/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.changepink==='pink' ? 'Enable white' :'Enable pink'}</label>
</div> */}
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
aboutText:PropTypes.string.isRequired,}

// if u dont pass pop values
Navbar.defaultProps = {
    title: 'Textutilies text here',
    aboutText:'about text here'

  };
