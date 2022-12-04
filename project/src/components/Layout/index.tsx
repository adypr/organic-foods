import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './layout.scss';

const Layout = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h1>Organic foods</h1>
          <nav>
            <ul className="header__list">
              <li className="header__item">
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="header__item">
                <NavLink to="/formpage">Add your product</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container">2022</div>
      </footer>
    </>
  );
};

export default Layout;
