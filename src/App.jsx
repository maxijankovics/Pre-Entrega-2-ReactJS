import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Layout from './components/Layout';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Productos from './components/Productos';

import "./App.css"
import DetalleProducto from './components/DetalleProducto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='productos' element={<Productos/>}/>
          <Route path='productos/categoria/:categoria' element={<Productos/>}/>
          <Route path='productos/:id' element={<DetalleProducto/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
