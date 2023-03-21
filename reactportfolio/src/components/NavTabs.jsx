import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs justify-content-end">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
           to="portfolio"
           className={({ isActive }) =>
           isActive ? 'nav-link active' : 'nav-link'
           }
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="experience"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Experience
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="services"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Services
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
