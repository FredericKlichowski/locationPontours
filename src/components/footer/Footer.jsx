import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <div className="locationPontours__footer">
      <h2>Derrière les vignes</h2>
      <div className="locationPontours__footer-links">
        <NavLink className="locationPontours__footer-link" to="/CGU">
          CGU
        </NavLink>
        <NavLink className="locationPontours__footer-link" to="/FAQ">
          FAQ
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;
