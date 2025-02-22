import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog';
import Contact from './pages/Contact'
import Account from './pages/Account';
import Cart from './pages/Cart'
import SingleBlog from './pages/SingleBlog'
import SingleProduct from './pages/SingleProduct'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />
        <Route path='/singleblog' element={<SingleBlog />} />
        <Route path='singleproduct' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

export default App
