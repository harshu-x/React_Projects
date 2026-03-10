import React from 'react'

import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'
import OrderConfirmation from './pages/OrderConfirmation'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
const App = () => {
  return <>
   <Router>
    <Routes>
      <Route path='/'  element={<ProductList />} />
    </Routes>
   </Router>
  </>
}

export default App
