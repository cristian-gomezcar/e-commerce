import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
  
export const CarritoPage = () => {
  const { listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const calcularTotal=()=>{
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)  }
 
    const handleImpresion=()=>{
      print()
    }
    return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCompras.map(item => (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.price}</td>
                <td>
                  <button className='btn btn-outline-primary' onClick={() => disminuirCantidad(item.id)}>-</button>
                  <button className='btn btn-outlinn'>{item.cantidad}</button>
                  <button className='btn btn-outline-primary' onClick={() => aumentarCantidad(item.id)}>+</button>

                </td>
                <td>
                  <button type="button"
                    className='btn btn-danger'
                    onClick={() => eliminarCompra(item.id)}
                  >Eliminar</button>
                </td>
              </tr>
            ))
          }
          <th>total: </th>
          <td></td>
          <td>Q: {calcularTotal()}</td>
          <td></td>
          

        </tbody>

      </table>
      <div className='d-grid gap-2'>
        <button onClick={handleImpresion} type="button" class="btn btn-danger">comprar</button>
      </div>
  
    </>
  )
}
