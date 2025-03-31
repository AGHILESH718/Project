import React, { useContext } from 'react'
import '../Components/Card.css'
import { passingValue } from '../App'

const Card = ({ id,productImage, productName, productPrice, productDesc }) => {
  const { cart,setCart } = useContext(passingValue)
  const handleClick = () =>{
    const product ={ id,productImage, productName, productPrice }
    setCart([...cart,product])
  }
  const negativeClick = () =>{
    const remove = cart 
    .slice()
    .reverse()
    .findIndex(item => item.id === id)

    if(remove !== -1){  
      const copy = [...cart];
      copy.splice(cart.length - 1 - remove, 1)
      setCart(copy)
    }
    // setCart(cart.filter(item => item.id !== id))
  }
  
  return (
    <div className='Card'>
      <div className='cardtop'>
        <img src={productImage} alt={productName} />
      </div>
      <div className='cardbottom'>
        <h2>{productName}</h2>
        <h2>{productPrice}</h2>
        <p>{productDesc}</p>
      </div>
      <div className='button'>
        <button onClick={handleClick}>Add to cart</button>
        <button onClick={negativeClick}>Remove</button>
      </div>
    </div>
  )
}

export default Card