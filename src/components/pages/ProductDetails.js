import React from "react"
import {useParams} from "react-router-dom"
import detailsdata from '../data/detailsdata'
import {Link} from 'react-router-dom'
import { useCart } from 'react-use-cart'
import ReactImageMagnify from 'react-image-magnify'
import { useTranslation } from 'react-i18next';


function ProductDetails(props){
    const {t, i18n} = useTranslation();

    const {productId} = useParams()
    const thisProduct = detailsdata.find(prod => prod.id === productId)
    return (
        <div className="productdetails py-5">
            <div className="container">
                <p className="link py-4"><Link to='/' className="link1">{t('text26')} / </Link> {t(thisProduct.title)}</p>
                <div className="row product d-flex justify-content-between">
                   <div className="img col-lg-5 col-md-6 col-10">
                    <div className="emoji">
                        <p>🔍</p>
                    </div>
                   <ReactImageMagnify {...{
                           smallImage: {
                               alt:"err",
                               isFluidWidth: true,
                               src: thisProduct.img,
                               width: 100,
                               height: 100
                           },
                           largeImage: {
                                src: thisProduct.img,
                                width: 800,
                                height: 800
                           },
                     
                            enlargedImagePosition: 'over',
                       }}
                       />
                     
                   </div>
                    <div className="col-lg-6 col-12 text">
                        <p className="desc">{t(thisProduct.desc)}</p>
                        <h3>{t(thisProduct.title)}</h3>
                        <p className="stock">{t('text150')} <span>{t(thisProduct.stock)}</span></p>
                        <hr />
                        <ul>
                            <li>{t(thisProduct.detail1)}</li>
                            <li>{t(thisProduct.detail2)}</li>
                            <li>{t(thisProduct.detail3)}</li>
                        </ul>
                  
                        <h2>${thisProduct.price}.00</h2>
                         
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
