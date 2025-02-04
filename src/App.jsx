import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Collection from './pages/Collection.jsx';
import About from './pages/About.jsx';
import Content from './pages/Content.jsx';  
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';


export default function App() {
  return (
    <React.Fragment>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Content/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
    </React.Fragment>
  )
}
