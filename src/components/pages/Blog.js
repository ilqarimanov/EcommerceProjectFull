import React from 'react'
import data8 from '../data/data8'
import BlogItem from './BlogItem'
import { useTranslation} from "react-i18next";

const Blog = () => {
    const { t } = useTranslation();
    return (
        <div className="blog py-5" data-aos="fade-up"  data-aos-duration="2000">
            <h2 className='title text-center'>{t("text29")}</h2>
            <div className="courses row d-flex justify-content-center align-items-center px-5 mt-5">
            {data8.blogs.map((item,index)=>{
                        return(
                            <BlogItem
                            img={item.img}
                            name={t(item.name)}
                            description1={t(item.description1)}
                            price={item.price}
                            rating={item.rating}
                            link={item.link}
                            item={item}
                            key={index}
                            />
                        )
                    })}
            </div>
      </div>
    )
}

export default Blog
