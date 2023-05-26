import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../petlover logo.svg';

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="nav-logo">
            <Link to="/">
               <img src={logo} alt="cocktail db logo" className="logo" />
            </Link>
         </div>
         <ul className="nav-links">
            <li>
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     isActive ? 'link active' : 'link'
                  }
               >
                  All Pets
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/dogs"
                  className={({ isActive }) =>
                     isActive ? 'link active' : 'link'
                  }
               >
                  Dogs
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/cats"
                  className={({ isActive }) =>
                     isActive ? 'link active' : 'link'
                  }
               >
                  Cats
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/birds"
                  className={({ isActive }) =>
                     isActive ? 'link active' : 'link'
                  }
               >
                  Birds
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/horses"
                  className={({ isActive }) =>
                     isActive ? 'link active' : 'link'
                  }
               >
                  Horses
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
