import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation} from "react-i18next";

const BlogItem = (props) => {
  const { t } = useTranslation();
  return (
        <div className="course">
    <div className="img">
       <img src={props.img}/>
    </div>
    <div className="ps-3 py-3">
      <h1 className="course__title">{t(props.name)}</h1>
      <p className="course__desc">{t(props.description1)}</p>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="course__price">${props.price}</h3>
          <p className="course__rating">{t('text638')}: {props.rating}/5</p>
        </div>
        <Link to={props.link} className='link'>{t("text154")}</Link>
      </div>
      
    </div>
  </div>
  )
}

export default BlogItem   
