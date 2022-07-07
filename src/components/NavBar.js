import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/"><img src="https://cdn-icons-png.flaticon.com/128/2322/2322261.png" alt="" className='mx-2' style={{height:"1.8rem"}}/><strong>NEWS-MONK</strong></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
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
