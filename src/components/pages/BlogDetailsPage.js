import React from 'react'
import {NavLink} from 'react-router-dom'
import {BiChevronRight} from 'react-icons/bi'
import data7 from '../data/data7'
import BlogDetailsItem from './BlogDetailsItem'
import { useTranslation} from "react-i18next";

const BlogDetailsPage = ({match}) => {
    const { t } = useTranslation();
    return (
        <div className='blogdetailspage' >
            <header>
                <div className="container py-5">
                   <h1 className='text-center'>{t('text26')}</h1>
                    <div className="text d-flex justify-content-center">
                        <NavLink to="/blog" className='navlink text-decoration-none'>{t('text29')}<BiChevronRight/></NavLink>
                        <p className='ms-2'>Details</p>
                    </div>
                </div>
            </header>
            {(() => {
                if (match.params.id==1) {
                    return (
                        <div className="d-flex align-items-center justify-content-center">
                    {data7.blog1.map((item,index)=>{
                        return(
                   
                            <BlogDetailsItem
                            img={item.img}
                            name={t(item.name)}
                            description2={t(item.description2)}
                            price={item.price}
                            rating={item.rating}
                            item={item}
                            key={index}
                            />
                        )
                    })}
                        </div>
                    )
                }else if(match.params.id==2) {
                    return (
                        <div className="d-flex align-items-center justify-content-center">
                        {data7.blog2.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                            img={item.img}
                            name={t(item.name)}
                            description2={t(item.description2)}
                            price={item.price}
                            rating={item.rating}
                            item={item}
                            key={index}
                            />
                            )
                        })}
                            </div>
                    )
                }else if(match.params.id==3) {
                    return (
                        <div className="d-flex align-items-center justify-content-center">
                        {data7.blog3.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                                img={item.img}
                                name={t(item.name)}
                                description2={t(item.description2)}
                                price={item.price}
                                rating={item.rating}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                            </div>
                    )
                }else if(match.params.id==4) {
                    return (
                        <div className="d-flex align-items-center justify-content-center">
                        {data7.blog4.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                                img={item.img}
                                name={t(item.name)}
                                description2={t(item.description2)}
                                price={item.price}
                                rating={item.rating}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                            </div>
                    )
                }else if(match.params.id==5) {
                    return (
                        <div className="d-flex align-items-center justify-content-center">  
                        {data7.blog5.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                                img={item.img}
                                name={t(item.name)}
                                description2={t(item.description2)}
                                price={item.price}
                                rating={item.rating}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                            </div>
                    )
                }
            })()} 
        </div>
    )
}

export default BlogDetailsPage
