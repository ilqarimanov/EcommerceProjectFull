import React, {useState} from 'react'
import { useCart } from 'react-use-cart'
import {Link} from 'react-router-dom'
import {TiTick} from 'react-icons/ti'

const ProductItem2 = (props) => {
  const [button, setButton] = useState(true);
    const {addItem} = useCart();
    return (
      
        <div key={props.id} className="card col productItem p-2">

          <Link to={`/products/${props.id}`} className="text-decoration-none">
          <p className="card-title">{props.title}</p>
          <h5 className="card-text">{props.desc}</h5>
          <img src={props.img} className="card-img-top" alt="err"  />
          </Link>
          <div className="pricebutton d-flex justify-content-between">
            <div className="price">
            <del>${props.exprice}.00</del>
            <p className="card-text">${props.price}.00</p>
            </div>
            
            <button  title='Add to cart' onClick={()=>addItem(props.item)} className="d-flex align-items-center justify-content-center">
                <button onClick={()=>setButton(false)}>
                  {
                      button ?
                      '🛒'  : <TiTick className="fs-3 tick pe-1"/>
                  }
                </button>
                </button>
          </div>
      </div>
    )
}

export default ProductItem2