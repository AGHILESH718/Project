import React, { useContext } from 'react'
import { passingValue } from '../App'
import Card from '../Components/Card'
import '../Pages/Product.css'

const Men = () => {
  const {productDetails} = useContext(passingValue)
  const men = productDetails.filter((x) => (
    x.productCat === 'Mens'   
  ))
  return (
    <div className='Men'>
      {men.map((item,index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}

export default Men