import React, { useContext } from 'react'
import { passingValue } from '../App'
import Card from '../Components/Card'

const Women = () => {
    const {productDetails} = useContext(passingValue)
    const women = productDetails.filter((x)=> (
      x.productCat === 'Womens'
    ))
  
  return (
    <div className='Women'>
      {women.map((item,index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  )
}

export default Women