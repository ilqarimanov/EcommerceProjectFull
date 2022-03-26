import React,{useState} from 'react'
import { useCart } from 'react-use-cart'
import {FiHeart} from 'react-icons/fi'
import {BiGitCompare} from 'react-icons/bi';
import { Link } from 'react-router-dom'
import {TiTick} from 'react-icons/ti'
import { useTranslation } from 'react-i18next';


const ProductItem5 = (props) => {
    const {t, i18n} = useTranslation();
    const [button, setButton] = useState(true);
    const {addItem} = useCart();
    return (
        <div className='box p-2'>
        <Link to={`/products/${props.id}`} className='text-decoration-none'>
        <p className='p1'>{props.desc}</p>
        <h6>{props.title}</h6>
        <img src={props.img} alt="err" />
        </Link>
        <div className='end1 d-flex justify-content-between mt-2'>
            <p className="price">${props.price}</p>
            
            <button  title='Add to cart' onClick={()=>addItem(props.item)} className="d-flex align-items-center justify-content-center">
                <button onClick={()=>setButton(false)}>
                  {
                      button ?
                      '🛒'  : <TiTick className="fs-3 tick pe-1"/>
                  }
                </button>
                </button>
        </div>
        <div className='end2 text-center'>
            <p className='mt-2'><FiHeart/>{t('text152')} <br />
            <BiGitCompare/> {t('text153')}</p>
        </div>
        </div>

    )
}

export default ProductItem5