import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { GrCatalog } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";

const Header = ({ setAnimarProyectos, setAnimarInicio, setAnimarContacto }) => {
  const handleProyectos = () => {
    setTimeout(() => {
      setAnimarProyectos(true);
      setAnimarInicio(false);
    }, 300);
  };

  const handleInicio = () => {
    setTimeout(() => {
      setAnimarProyectos(false);
      setAnimarInicio(true);
    }, 300);
  };

  const handleContactos = () => {
    setTimeout(() => {
      setAnimarContacto(true);
      setAnimarProyectos(false);
      setAnimarInicio(false);
    }, 300);
  };

  return (
    <div className="header">
      <div className="toggle">
        <GrAddCircle />
      </div>
      <li>
      <Link to="/" onClick={handleInicio}>
        <FcHome className="icons" />
      </Link>
      </li>


      <li>
      <Link to="proyectos" onClick={handleProyectos}>
        <FcProcess className="icons" />
      </Link>
      </li>


      <li>
      <Link to="contactos"  onClick={handleContactos}></Link>
        <GrCatalog className="icons"/>
      </li>

      
     
    </div>
  );
};

export default Header;
