import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './navbar.css';
import Navmenuburger from '../navmenuburger/Navmenuburger';

function Navbar({ className }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakPoint = 700;
  React.useEffect(() => {
    /* I added an event listener inside of a "useEffect" hook that updates
       the "width" state variable when the window size changes */
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return (
    <div className="locationPontours__navbar-container">
      <div className="locationPontours__navbar-linksContainer">
        {width > breakPoint ? (
          <>
            <NavLink
              className={({ isActive }) => (isActive ? `${className}-active` : className)}
              to="/">
              Accueil
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? `${className}-active` : className)}
              to="/">
              La région
            </NavLink>
            <button className="locationPontours__navbar-button" href="contact" type="button">
              <a href="mailto:frederic.klichowski@gmail.com?">
                <span>Contact</span>
              </a>
            </button>{' '}
          </>
        ) : (
          <Navmenuburger />
        )}
      </div>
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string
};

Navbar.defaultProps = {
  className: 'locationPontours__navbar-link'
};

export default React.memo(Navbar);
