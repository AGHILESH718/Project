import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './Pages/Products.jsx'
import Men from './Pages/Men.jsx'
import Women from './Pages/Women.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Shirt from './assets/Images/Shirt.jpg'
import Shirt1 from './assets/Images/Shirt1.jpg'
import Shirt2 from './assets/Images/Shirt2.jpg'
import Shirt3 from './assets/Images/Shirt3.jpg'
import Shirt4 from './assets/Images/Shirt4.jpg'
import Shirt5 from './assets/Images/Shirt5.jpg'
import Shirt6 from './assets/Images/Shirt6.jpg'
import Shirt7 from './assets/Images/Shirt7.jpg'
import Shirt8 from './assets/Images/Shirt8.jpg'
import Shirt9 from './assets/Images/Shirt9.jpg'
import Shirt10 from './assets/Images/Shirt10.jpg'
import Shirt11 from './assets/Images/Shirt11.jpg'
import Shirt12 from './assets/Images/Shirt12.jpg'
import Shirt13 from './assets/Images/Shirt13.jpg'
import Shirt14 from './assets/Images/Shirt14.jpg'
import Shirt15 from './assets/Images/Shirt15.jpg'
import Chudi1 from './assets/W_image/1.jpg'
import Chudi2 from './assets/W_image/2.jpg'
import Chudi3 from './assets/W_image/3.jpg'
import Chudi4 from './assets/W_image/4.jpg'
import Chudi5 from './assets/W_image/5.jpg'
import Chudi6 from './assets/W_image/6.jpg'
import Chudi7 from './assets/W_image/7.jpg'
import Chudi8 from './assets/W_image/8.jpg'
import Chudi9 from './assets/W_image/9.jpg'
import Chudi10 from './assets/W_image/10.jpg'
import Chudi11 from './assets/W_image/11.jpg'
import Chudi12 from './assets/W_image/12.jpg'
import Chudi13 from './assets/W_image/13.jpg'
import Chudi14 from './assets/W_image/14.jpg'
import Chudi15 from './assets/W_image/15.jpg'
import Chudi16 from './assets/W_image/16.jpg'
import './App.css'
import Cart from './Components/Cart.jsx'

export const passingValue = createContext()

const App = () => {
  const [cart, setCart] = useState([])
  const productDetails = [
    {
      id: "1",
      productCat: 'Mens',
      productImage: Shirt,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "2", productCat: 'Mens',
      productImage: Shirt1,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "3", productCat: 'Mens',
      productImage: Shirt2,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "4", productCat: 'Mens',
      productImage: Shirt3,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "5", productCat: 'Mens',
      productImage: Shirt4,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "6", productCat: 'Mens',
      productImage: Shirt5,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "7", productCat: 'Mens',
      productImage: Shirt6,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "8", productCat: 'Mens',
      productImage: Shirt7,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "9", productCat: 'Mens',
      productImage: Shirt8,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "10", productCat: 'Mens',
      productImage: Shirt9,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "11", productCat: 'Mens',
      productImage: Shirt10,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "12", productCat: 'Mens',
      productImage: Shirt11,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "13", productCat: 'Mens',
      productImage: Shirt12,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "14", productCat: 'Mens',
      productImage: Shirt13,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "15", productCat: 'Mens',
      productImage: Shirt14,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "16", productCat: 'Mens',
      productImage: Shirt15,
      productName: 'Shirt',
      productPrice: 'RS:500',
      productDesc: 'A garment for the upper part of the body'
    },
    {
      id: "17",
      productCat: 'Womens',
      productImage: Chudi1,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "18",
      productCat: 'Womens',
      productImage: Chudi2,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "19",
      productCat: 'Womens',
      productImage: Chudi3,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "20",
      productCat: 'Womens',
      productImage: Chudi4,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "21",
      productCat: 'Womens',
      productImage: Chudi5,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "22",
      productCat: 'Womens',
      productImage: Chudi6,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "23",
      productCat: 'Womens',
      productImage: Chudi7,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "24",
      productCat: 'Womens',
      productImage: Chudi8,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "25",
      productCat: 'Womens',
      productImage: Chudi9,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "26",
      productCat: 'Womens',
      productImage: Chudi10,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "27",
      productCat: 'Womens',
      productImage: Chudi11,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "28",
      productCat: 'Womens',
      productImage: Chudi12,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "29",
      productCat: 'Womens',
      productImage: Chudi13,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "30",
      productCat: 'Womens',
      productImage: Chudi14,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "31",
      productCat: 'Womens',
      productImage: Chudi15,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    },
    {
      id: "32",
      productCat: 'Womens',
      productImage: Chudi16,
      productName: 'Chudi',
      productPrice: 'RS:600',
      productDesc: 'A churidar is a type of tight-fitting pants that originated in South Asia and are worn by both men and women. The word churidar comes from the Hindi word for bangles'
    }
  ];

  return (
    <BrowserRouter>
      <passingValue.Provider value={{ productDetails, cart, setCart }}>
        <Navbar />
        <div className='App'>
          <div className='product'>
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/Men' element={<Men />} />
              <Route path='/Women' element={<Women />} />
            </Routes>
          </div>
          <div className='cartcontainer'>
            <Cart />
          </div>
        </div>
      </passingValue.Provider>
    </BrowserRouter>
  )
}

export default App