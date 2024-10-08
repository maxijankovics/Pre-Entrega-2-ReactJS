import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <nav className="navegacion">
        <ul>
          <img className="logo" src="/logo.png" alt="Logo Bistro"/>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/productos"}>Productos</Link>
          </li>
          <li>
            <Link to={"/productos/categoria/menus-completos"}>Menus completos</Link>
          </li>
          <li>
            <Link to={"/productos/categoria/platos-carta"}>Platos carta</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Layout