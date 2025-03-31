import React, { useContext } from 'react'
import { passingValue } from '../App'

const Cart = () => {
  const { cart } = useContext(passingValue)  
  const total = cart.reduce((sum,item) => sum+Number(item.productPrice.replace("RS:","")),0)

  return (
    <div className='Cart'>
      <div className='cart'>
        <h1>Cart:{cart.length}</h1>
        <h1>Total:${Number(total).toFixed(2)}</h1>
      </div>
      <div className='cartbottom'>
        {cart.map((item,index)=>(
          <div key={index}>
            <img src={item.productImage} />
            <h2>{item.productName}</h2>
            <h3>{item.productPrice}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart