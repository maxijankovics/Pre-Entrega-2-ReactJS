
import { Link } from 'react-router-dom'

function Producto({nombre, precio, rutaImagen, id}) {
  return (
    <Link to={`/productos/${id}`} className='card'>
        <img src={rutaImagen}/>
        <h2>{nombre}</h2>
        <h3>${precio}</h3>
    </Link>
  )
}

export default Producto