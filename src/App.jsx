import React from 'react'
import { Navbar } from './Components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CarritoPage } from './rutas/carritoPage'
import { ComprasPage } from './rutas/ComprasPage'
import { ProductosPrivider } from './context/ProductosPrivider'
import { CarritoProvider } from './context/CarritoProvider'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <ProductosPrivider>
        <CarritoProvider>
          <Navbar></Navbar>
          <div className="container">
            <Routes>
              <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
              <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
              <Route path="/*" element={<Navigate to='/' />}></Route>
            </Routes>
          </div>
        </CarritoProvider>
      </ProductosPrivider>
    </BrowserRouter>
  )
}
