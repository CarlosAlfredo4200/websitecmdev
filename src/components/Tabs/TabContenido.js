import React from "react";

import gastos from "../Img/gastos.png";
import juegos from "../Img/juegos.png";
import dw from "../Img/Dw.png";

const TabContenido = ({ index }) => {
  // const titulos = {
  //   1: "App de Gestión de gastos",
  //   2: "App de Consumo de API (freeGame)",
  //   3: "landing pages",
  // };

  const parrafos = {
    1: {
      tecnologia: "Javascript-Rect",
      estilos: "Css",
      descripcion:
        "Es una app para gestionar presupuestos. Permite ingresar una cantidad he ir adicionando cada gastos diaros permitiendo la visualización inmediata de de tus gastos y el monto disponible. ",
        url:"https://presupuestopersonal.netlify.app/"
    },

    2:{
      tecnologia: "Javascript-Rect, resposive",
      estilos: "Css",
      descripcion:
        "Práctica consumo api freetogame con fetch en react y css. Listando la información en cards. ",
        url:"https://consumoapifreetogame.netlify.app/"
    },

    3: {
      tecnologia: "Javascript-Rect, responsive",
      estilos: "Css",
      descripcion:
        "Práctica de landing pages con react y css ",
        url:"https://carlosalfredo4200.github.io/dwfront/"
    },
  };

  const imagenes = {
    1: gastos,
    2: juegos,
    3: dw,
  };

  const indexDefault = 1;

  
  const parrafo = parrafos[index] || indexDefault;
  const imagen = imagenes[index] || indexDefault;
  

  
  // console.log('valor del index desde tabcontenido :'+index);

  return (
    <div>
      <div className="contenedor-tabs">
       

        <div className="contentTab">

          <div className="tab-image">
            <img className="imagen" src={imagen} alt="imagen" />
          </div>

          <div className="descripcion-proyecto">
            <p className="tab-p">
              Tecnología : <span>{parrafo.tecnologia}</span>
            </p>
            <p className="tab-p">
              Estilos : <span>{parrafo.estilos}</span>
            </p>
            <p className="tab-p description">
              Descripción : <span>{parrafo.descripcion}</span>
            </p>

            <div>
              <a href={parrafo.url}  className="btn-enviar" rel="noreferrer"  target="_blank" >Ver mas...</a>
           </div>
          </div>

       


        </div>
      </div>
    </div>
  );
};

export default TabContenido;
