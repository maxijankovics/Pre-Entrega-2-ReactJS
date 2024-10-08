import productos from "../data/productos"
import { useParams } from "react-router-dom"

function DetalleProducto() {
    const {id} = useParams();

    const producto = productos.find( prod => prod.id === parseInt(id))

    if(!producto) {
        return <h2>El producto no existe</h2>
    }
  return (
    <div className="contenedor">
        <img src={producto.rutaImagen}/>
        <div>
            <h2>{producto.nombre}</h2>
            <h3>${producto.precio}</h3>
        </div>
    </div>
  )
}

export default DetalleProducto