import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog';
import Contact from './pages/Contact'
import Account from './pages/Account';
import Cart from './pages/Cart'
import SingleBlog from './pages/SingleBlog'
import SingleProduct from './pages/SingleProduct'
import CategoryList from './pages/Admin/Categories/CategoryList';
import CreateCategory from './pages/Admin/Categories/CreateCategory';
import { ToastContainer, Slide } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {

  return (
    <>
      <ToastContainer position='top-right' autoClose={3000} transition={Slide} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />
        <Route path='/singleblog' element={<SingleBlog />} />
        <Route path='singleproduct' element={<SingleProduct />} />
        <Route path='/admin/*' >
          <Route path='categories' element={<CategoryList />} />
          <Route path='category/create' element={<CreateCategory />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
