import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllProducts from './Pages/AllProducts'
import Bag from './Pages/Bag'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import SingleProduct from './Pages/SingleProduct'
import Wishlist from './Pages/Wishlist'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/products" element= {<AllProducts/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products/:id" element= {<SingleProduct/>}/>
      <Route path="/bag" element={<Bag/>}/>
    </Routes>
  )
}

export default App
