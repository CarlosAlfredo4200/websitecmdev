import React from "react";
import ImageSlider from "./ImageSlider";

const Carrusel = () => {
  const slides = [
    {
      url: "https://cutewallpaper.org/21/javascript-wallpaper/JavaScript-Wallpapers-Wallpaper-Cave.jpg",
      title: "JavaScript",
      razon: "Es importante conocer JavaScript porque es ampliamente utilizado en el desarrollo web y permite crear aplicaciones interactivas y funcionales. Dominar JavaScript abre oportunidades en programación y facilita la transición a otros lenguajes. Además, es compatible con la mayoría de los navegadores, lo que permite llegar a una amplia audiencia."
    },
    {
      url: "https://openwebsolutions.in/blog/wp-content/uploads/2018/01/banner-1-1024x497.jpg",
      title: "heml css",
      razon: "Es importante conocer CSS porque es el lenguaje utilizado para diseñar y dar estilo a páginas web. Permite controlar la apariencia, el diseño y la presentación de los elementos en un sitio. Con CSS, se puede lograr una experiencia visual atractiva, coherente y adaptable, mejorando la usabilidad y la estética de los sitios web."
    },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div >
      <div style={containerStyles}>

        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Carrusel;
