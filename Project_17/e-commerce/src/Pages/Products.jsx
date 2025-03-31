import React, { useContext } from 'react'
import { passingValue } from '../App.jsx'
import Card from '../Components/Card.jsx'
import '../Pages/Product.css'

const Products = () => {
  const {productDetails} = useContext(passingValue)
  return (
    <div className='Products'>
     {productDetails.map((item,index) => (
      <Card key={index} {...item} />
     ))}
    </div>
  )
}

export default Products