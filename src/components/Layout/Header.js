import React from 'react'

export default () => (
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <span className="navbar-brand col-sm-3 col-md-2 mr-0">Company name</span>
    <input
      className="form-control form-control-dark w-100"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <span className="nav-link">Sign out</span>
      </li>
    </ul>
  </nav>
)
