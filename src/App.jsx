import React from 'react';
import {BrowserRouter, Routes, Route, Link, NavLink}
from 'react-router-dom'
import Contact from './component/Contact';
import "./component/NavLinkTest.css";
import Products from './component/Products';
import ProductDetail from './component/ProductDetail';
const products=[
  {id:1,
     name:"Laptop", 
     price:1200,
      image:"/image/laptop.png"
    },
  {
    id:1, 
    name:"Keyboard", 
    price:100,
     image:"/image/keyboard.png"
    },

  {
    id:1, 
    name:"Mouse",
     price:200, 
     image:"/image/mouse.png"
    }
]

const Home = () => <h2>Welcome to my Home</h2>

function About() {
  return (
    <h2>This is a About Page</h2>
  )
}
function App() {
  return (
<BrowserRouter>
<nav>
  <NavLink to="/">Home|</NavLink>
  <NavLink to="/about">About|</NavLink>
  <NavLink to="/contact">Contact|</NavLink>
   <NavLink to="/productlist">Product List|</NavLink>
</nav>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/about" element={<About />}></Route>
  <Route path="/contact" element={<Contact />}></Route>
  <Route path="/Productlist" element={<Products list={products} />}></Route>
   <Route path="/Productlist/:id" element={<ProductDetail list={products} />}></Route>
</Routes>
</BrowserRouter>
  
    
  
)
}

export default App