import './App.css'
import Brands from './components/layout/brands/Brands'
import CampaignSingle from './components/layout/campaign/CampaignSingle'
import Footer from './components/layout/footer/Footer'
import Header from './components/layout/header/Header'
import Policy from './components/layout/policy/Policy'
import SingleProduct from './pages/SingleProduct'
// import Home from './pages/Home'

function App() {

  return (
    <>
      <Header />
      {/* <Home /> */}
      <SingleProduct />
      <Brands />
      <CampaignSingle />
      <Policy />
      <Footer />
    </>
  )
}

export default App
