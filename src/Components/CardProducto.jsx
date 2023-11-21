import React from 'react'
import { useState } from 'react'
import '../styles/CardProducto.css'

export const CardProducto = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar, handleAumentar,handleDisminuir }) => {
  const [add, setAdd] = useState(false)
  
  const clicAdd=()=>{
    handleAgregar()
    setAdd(true)
  }
  const clicQuitar=()=>{ 
    handleQuitar()
    setAdd(false)
}

 
  return (
    <div className='tarjeta'>
      <div className='targeta-content'>
      <img className='tarjeta-imagen' src={imagen} alt="" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="targeta-precio">${precio}</p>
        {add
          ? <button onClick={clicQuitar} className='boton-quitar' type='button'>Quitar del carrito</button>
          : <button onClick={clicAdd} className='boton-agregar' type='button'>Agregar al carrito</button>}
      </div>
      </div>
    </div>
  )
}
