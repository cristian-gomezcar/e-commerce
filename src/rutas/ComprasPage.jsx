import { CardProducto } from "../Components/CardProducto"
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { CarritoContext } from "../context/CarritoContext"
import { CarritoPage } from "./carritoPage"
import '../styles/ComprasPage.css'
export const ComprasPage = () => {

  const { productos } = useContext(ProductContext)
  const { agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }
  const handleAumentar = (id) => {

  }
  const handleDisminuir = (id) => {

  }
  return (
    <>
      <h1 className="compras-title">Compras:</h1>
      <hr />
      <div className="product-container">
        {productos.map((producto) => (
          <CardProducto
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
          />
        ))}
      </div>
    </>
  )
}
