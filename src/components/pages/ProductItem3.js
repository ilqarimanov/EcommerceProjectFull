import React, {useState} from 'react'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import {TiTick} from 'react-icons/ti'

const ProductItem3 = (props) => {
  const [button, setButton] = useState(true);
    const {addItem} = useCart();
    return (
      <div className="card col productItem2 p-4">
        
        <Link to={`/products/${props.id}`} className="text-decoration-none">
        <p className="card-title">{props.title}</p>
        <h5 className="card-text">{props.desc}</h5>
        <img src={props.img} className="card-img-top" alt="err"  />
        <div className="mini d-flex mt-5">
            <img src={props.mini1} alt="err" />
            <img src={props.mini2} alt="err" />
            <img src={props.mini3} alt="err" />
          </div>
          </Link>
        <div className="pricebutton d-flex justify-content-between mt-4">
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

export default ProductItem3