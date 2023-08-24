import React from "react";
import { BsMenuDown } from "react-icons/bs";

import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header>
       
        <div className="logo">
         <Logo />
        </div>
          
          <div className="links">
            <a className="enlaces" href="experimentos">
              Experimentos
            </a>
            <a className="enlaces" href="Contact">
              Contacto
            </a>
          </div>

        <div>
          <label className="icono-menu">
            <BsMenuDown />
          </label>
        </div>
      </header>
    
  );
};

export default Header;
