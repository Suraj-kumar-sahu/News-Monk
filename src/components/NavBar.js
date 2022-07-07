import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"><img src="https://cdn-icons-png.flaticon.com/128/2322/2322261.png" alt="" className='mx-2' style={{height:"2rem"}}/><strong>NEWS-MONK</strong></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                  </li>
                 <li className="nav-item">
                    <Link className="nav-link text-white" to="/business">Business</Link>
                  </li>
                 <li className="nav-item">
                    <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                  </li>
                 <li className="nav-item">
                    <Link className="nav-link text-white" to="/general">General</Link>
                  </li>
                 <li className="nav-item">
                    <Link className="nav-link text-white" to="/health">Health</Link>
                  </li>
                 <li className="nav-item">
                    <Link className="nav-link text-white" to="/science">Science</Link>
                  </li>
                 <li className="nav-item">
                    <Link className="nav-link text-white" to="/sports">Sports</Link>
                  </li>
                 <li className="nav-item">
                    <Link className="nav-link text-white" to="/technology">Technology</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/About">About</Link>
                  </li>
                  
                </ul>
                <h7>Made by <a href="https://github.com/Suraj-kumar-sahu?tab=overview&from=2022-07-01&to=2022-07-06" target="_blank" class="text-decoration-none" style={{color:"black"}}><strong>Suraj Kumar Sahu</strong></a></h7>
              </div>
            </div>
          </nav>
    );
  }
}

export default Navbar
