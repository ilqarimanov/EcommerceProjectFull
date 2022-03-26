import React from 'react'
import { useTranslation} from "react-i18next";

const BlogDetailsItem = (props) => {
  const { t } = useTranslation();
  return (
    <div className="ind__course d-flex  justify-content-between align-items-center">
    <div className="img">
      <img src={props.img}/>
    </div>
    <div className="text">
    <h1 className="ind__course__title">{props.name}</h1>
    
    <p className="course__desc">
      Description: {props.description2}
    </p>
    <h1 className="ind__course__price">${props.price}</h1>
  
  <h4 className="ind__course__rating">Popular: {props.rating}/5</h4>
  <button className="">Buy Now!</button>
    </div>
  </div>
  )
}

export default BlogDetailsItem