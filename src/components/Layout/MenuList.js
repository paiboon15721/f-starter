import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menus } from 'App'

const MenuList = () => {
  const { pathname } = useLocation()

  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {menus.map(v => (
            <li key={v.path} className="nav-item">
              <Link
                to={v.path}
                className={`nav-link${pathname === v.path ? ' active' : ''}`}
              >
                {v.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default MenuList
