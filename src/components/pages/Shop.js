import React from 'react';
import {FaAngleRight} from 'react-icons/fa'
import { useTranslation } from 'react-i18next';


const Shop = (props) => {
  const {t} = useTranslation();
  return (
  <div className='col-3 shop d-flex justify-content-between align-items-center' data-aos="fade-up" data-aos-duration="3000">
      <img src={props.img} alt="err" />
      <div className="text">
          <p>{props.text1}<br/>{props.text2}<br/>{props.text3}</p>
          <b className='d-flex'>{t('text155')} <button className=' ms-2 mt-1 d-flex justify-content-center align-items-center'><FaAngleRight/></button></b>
      </div>

  </div>
  )
};

export default Shop;
