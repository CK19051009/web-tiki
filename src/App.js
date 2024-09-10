
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home} from './pages/hone/homepage'
import { ProductDetailsPages } from './pages/productdetails/productdetails';
import React from 'react';

function App() {
  return (
    <>

      <BrowserRouter>
      
          <Routes>
              <Route  path='/'  >
              
              
                <Route index element ={<Home />}/>
                <Route path='page/:page' element ={<Home />} />
                <Route  path='product/:id' element={<ProductDetailsPages />}/>
              </Route>

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
