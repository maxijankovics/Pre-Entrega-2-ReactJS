import productos from "../data/productos"
import Producto from "./Producto"

import { useParams } from "react-router-dom"

import "./styles.css"

function Productos() {
    const {categoria} = useParams();
    const productosFiltrados = categoria
        ? productos.filter( prod => prod.categoria === categoria)
        : productos;
    
    return (
        <div id="container">
            {productosFiltrados.map( prod => (
                <Producto key={prod.id} {...prod}/>
            ))}
        </div>
    )
}

export default Productos;