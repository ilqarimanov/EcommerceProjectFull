import React, {useState} from 'react'
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import {TiTick} from 'react-icons/ti'
import { useTranslation } from 'react-i18next';

const ProductItem4 = (props) => {
  const {t, i18n} = useTranslation();
  const [button, setButton] = useState(true);
    const {addItem} = useCart();
    return (
        <div className="col-lg-4 col-md-6 col-10 productItem4 p-4">
        
        <div className=" d-flex justify-content-between">

        <img src={props.img} className="card-img-top" alt="err"  />

        <div className="card-text1">
           <p className="card-title">{props.title}  </p>
          <h5 className="card-text">{props.desc}</h5>
          

          <div className="pricebutton d-flex justify-content-between mt-4">
           <div>
          
           <div className="price d-flex mt-2">
            <p className="card-text">${props.price}.00</p>
            <del className='mt-1 mx-2'>{props.exprice}</del>
            </div>
            <Link className="link" to={`/products/${props.id}`}>{t('text154')}</Link>
            
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
     


        </div>
      </div>
    )
}

export default ProductItem4