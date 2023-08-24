import React from 'react'
import Carrusel from './Carrusel'
import InfoRazones from './InfoRazones'

const ContainerCarrusel = () => {
  return (
    <div className="containerCarrusel">
        <div>
        <Carrusel />
        </div>
        <div>
            <InfoRazones />
        </div>
</div>
  )
}

export default ContainerCarrusel