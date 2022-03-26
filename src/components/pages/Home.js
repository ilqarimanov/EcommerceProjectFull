import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import ProductItem1 from './ProductItem1';
import ProductItem2 from './ProductItem2';
import ProductItem3 from './ProductItem3';
import ProductItem4 from './ProductItem4';
import ProductItem5 from './ProductItem5';
import ProductItem1_2 from './ProductItem1_2';
import ProductItem1_3 from './ProductItem1_3';
import data1 from '../data/data1';
import data2 from '../data/data2';
import data3 from '../data/data3';
import data4 from '../data/data4';
import data5 from '../data/data5';
import Menu from './Menu';
import Shop from './Shop';
import Counter from './Counter';
import img2 from '../../assets/img/img2.png'
import img3 from '../../assets/img/img3.png'
import img4 from '../../assets/img/img4.png'
import img29 from '../../assets/img/img29.png'
import img70 from '../../assets/img/img70.png'
//icons import 
import { AiOutlineMenuUnfold} from 'react-icons/ai'
import {FaAngleDown} from 'react-icons/fa'
import { useTranslation } from 'react-i18next';


const Home = (props) => {
    const [id, setid] = useState(props.id);
    const {t} = useTranslation();
// useEffect(()=>{
//     localStorage.setItem('id', id);
// },[id])
    var settings2 = {
        infinite: false,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
                dots: false
                }
            },
            {
                breakpoint:600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false
                }
            }     
    ]
  };
    return (
        <div className='home'>
{/* Home Section1 Start */}
           <section className='section1'>
               <div className="menu mt-4">
                   <div className="container d-flex">
                       <b className='all px-3 d-flex align-items-center'> 
                            <AiOutlineMenuUnfold className='me-2'/>
                            {t('text30')}
                        </b>
                        <ul className='d-flex justify-content-between ul1 mt-2 ms-3'>
                            <li className='li1'> <b>{t('text31')}</b>  <FaAngleDown/>
                                <div className='d-flex open'>
                                    {data1.menuData.map((item,index)=>{
                                        return(
                                        <Menu 
                                        li1={t(item.li1)} li2={t(item.li2)} 
                                        li3={t(item.li3)} li4={t(item.li4)} 
                                        li5={t(item.li5)} li6={t(item.li6)} 
                                        li7={t(item.li7)} li8={t(item.li8)}
                                        li9={t(item.li9)} li10={t(item.li10)} 
                                        li11={t(item.li11)} li12={t(item.li12)} 
                                        li13={t(item.li13)} li14={t(item.li14)}
                                        li15={t(item.li15)} li16={t(item.li16)} 
                                        li17={t(item.li17)} key={index}
                                        />
                                        )
                                    })}
                                </div>
                            </li>
                            <li>
                                <b><NavLink to='/allproducts'  className="link"  activeClassName="active" >
                                        <li>{t('text32')}</li>
                                </NavLink></b>
                            </li>
                            <li><a href="#"><b>{t('text33')}</b></a></li>
                            <li><a href="#"><b>{t('text34')}</b></a></li>
                        </ul>
                    </div>
                </div>
                <div className="bg">
                    <div className="container d-flex justify-content-between">
                        <ul>
                            <li>{t('text35')}</li>
                            <li>{t('text36')}</li>
                            <li>{t('text37')}</li>
                            <li>{t('text38')}</li>
                            <li>{t('text39')}</li>
                            <li>{t('text40')}</li>
                            <li>{t('text41')}</li>
                            <li>{t('text42')}</li>
                            <li>{t('text43')}</li>
                            <li>{t('text44')}</li>
                            <li className='end'>{t('text45')}</li>
                        </ul>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active button" aria-current="true" aria-label="Slide 1" />
                                <button className='button' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button className='button' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='d-flex justify-content-between'>
                                        <div className="text ">
                                            <h1 className="animate__animated animate__fadeInRightBig">{t('text46')}<br />{t('text47')}</h1>
                                            <h6 className="animate__animated animate__fadeInRightBig">{t('text48')}</h6>
                                            <p className="animate__animated animate__fadeInRight">{t('text49')}</p>
                                            <b><sup>$</sup> 749 <sup>99</sup></b>
                                            <button className='mt-2 py-2 animate__animated animate__fadeInRightBig'>{t('text50')}</button>
                                        </div>
                                        <img src={img2} alt="err" className="animate__animated animate__fadeInRightBig" />
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-between'>
                                        <div className="text p-5">
                                            <h5 className="animate__animated animate__fadeInRightBig">{t('text51')}</h5>
                                            <h2 className="animate__animated animate__fadeInRight">{t('text52')}<br />{t('text53')}<br /> {t('text54')} <b>{t('text55')}</b> </h2>
                                            <button className='mt-4 py-2 animate__animated animate__fadeInRightBig'>{t('text56')}</button>
                                        </div>
                                        <img className="animate__animated animate__fadeInRightBig" src={img3} alt="err" />
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-between'>
                                        <div className="text p-5">
                                            <h5 className="animate__animated animate__fadeInRightBig">{t('text57')}</h5>
                                            <h2 className="animate__animated animate__fadeInRight">{t('text58')} <br />{t('text59')}<br />{t('text60')}<b>{t('text61')}</b> </h2>
                                            <button className='mt-4 py-2 animate__animated animate__fadeInRightBig'>{t('text62')}</button>
                                        </div>
                                        <img src={img4} alt="err" className="animate__animated animate__fadeInRightBig" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-4">
                    <div className="row shops d-flex justify-content-between">
                        {data2.shop.map((item,index)=>{
                            return(
                            <Shop
                            img={item.img}
                            text1={t(item.text1)}
                            text2={t(item.text2)}
                            text3={t(item.text3)}
                            item={item}
                            key={index}
                            />
                            )
                        })}
                    </div>
                </div>
            </section>
{/* Home Section1 End */}

{/* Home Section2 Start */}
            <section className="section2 py-5">
                <div className="container d-flex justify-content-between">
                    <div className="row1 d-flex flex-column justify-content-between p-5 " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className="text1 d-flex justify-content-between align-items-center">
                            <h5>{t('text63')}</h5>
                            <div className="text2 d-flex align-items-center justify-content-center">
                                <p className='text-center mt-2'> <span>{t('text64')} </span><br/> $20.00</p>
                            </div>
                        </div>
                        <div className="imgtext">
                            <img src={img70} alt="err" />
                            <div className="text3">
                                <p className='title'>{t('text65')}</p>
                                <p className="price">$79.00 <del>$99.00</del> </p>
                                <p className='desc'>{t('text66')} </p>
                                <div className="timer d-flex justify-content-center">
                                    <Counter/>                 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row2 ms-5" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className="buttons d-flex ">
                            <button id="1" onClick={()=>setid(1)} style={{fontWeight: id=== 1 ? 'bold' : "normal", color: id=== 1 ? 'red' : "black", backgroundColor: id=== 1 ? '#fed700' : "#EFEFEF"}}>{t('text67')}</button>
                            <button  id="2" onClick={()=>setid(2)} style={{fontWeight: id=== 2 ? 'bold' : "normal", color: id=== 2 ? 'red' : "black", backgroundColor: id=== 2 ? '#fed700' : "#EFEFEF"}} >{t('text68')}</button>
                            <button  id="3" onClick={()=>setid(3)}  style={{fontWeight: id=== 3 ? 'bold' : "normal", color: id=== 3 ? 'red' : "black", backgroundColor: id=== 3 ? '#fed700' : "#EFEFEF"}} >{t('text69')}</button>
                         </div>
                         {(() => {
                             if (id==1) {
                                 return(
                                 <div className='row row3'>
                                     {data3.productData1.map((item,index)=>{
                                         return(
                                         <ProductItem1
                                         id={item.id}
                                         img={item.img}
                                         title={t(item.title)}
                                         desc={t(item.desc)}
                                         price={item.price}
                                         item={item}
                                         key={index}
                                         />
                                        )
                                    })}
                                </div>
                                )}else if(id==2){
                                    return(
                                    <div className='row row3'>
                                        {data3.productData2.map((item,index)=>{
                                            return(
                                            <ProductItem1_2
                                            id={item.id}
                                            img={item.img}
                                            title={t(item.title)}
                                            desc={t(item.desc)}
                                            price={item.price}
                                            item={item}
                                            key={index}
                                            />
                                           )
                                        })}
                                    </div>
                                 )}else if(id==3){
                                     return(
                                     <div className='row row3'>
                                         {data3.productData3.map((item,index)=>{
                                             return(
                                             <ProductItem1_3
                                            id={item.id}
                                            img={item.img}
                                            title={t(item.title)}
                                            desc={t(item.desc)}
                                            price={item.price}
                                            item={item}
                                            key={index}
                                            />
                                            )
                                        })}
                                    </div>
                                 )}
                         })()} 
                    </div>
                </div>
            </section>
{/* Home Section2 End */}

{/*Home Section3 Start */}
            <section className='section3 py-4 ' data-aos="fade-up" data-aos-duration="3000">
                <div className="container">
                    <div className='row products d-flex justify-content-between'>
                        <div className='col-lg-3 col-md-6 col-10'>
                            {data4.productData.map((item,index)=>{
                                return(
                                <ProductItem2
                                id={item.id}
                                img={item.img}
                                title={t(item.title)}
                                desc={t(item.desc)}
                                exprice={item.exprice}
                                price={item.price}
                                link={item.link}
                                item={item}
                                key={index}
                                />
                                )
                            })}
                        </div>
                        <div className='col-lg-6 col-md-6 col-10'>
                            {data4.productData3.map((item,index)=>{
                                return(
                                <ProductItem3
                                id={item.id}
                                img={item.img}
                                title={t(item.title)}
                                desc={t(item.desc)}
                                price={item.price}
                                mini1={item.mini1}
                                mini2={item.mini2}
                                mini3={item.mini3}
                                exprice={item.exprice}
                                item={item}
                                key={index}
                                />
                                )
                            })}
                        </div>
                        <div className='col3 col-lg-3 col-md-6 col-10'>
                            {data4.productData2.map((item,index)=>{
                                return(
                                <ProductItem2
                                id={item.id}
                                img={item.img}
                                title={t(item.title)}
                                desc={t(item.desc)}
                                price={item.price}
                                exprice={item.exprice}
                                item={item}
                                key={index}
                                />
                                )
                            })}
                        </div>
                    </div>
                </div>  
            </section>
{/*Home Section3 End */}

{/*Home Section4 Start */}
            <section className='section4' data-aos="fade-up" data-aos-duration="3000">
                <div className="container">
                    <h1 className='mb-3'>{t('text70')}</h1>
                    <div className="line">
                        <hr />
                        <div className="line2"></div>
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                         </div>
                         <div className="carousel-inner">
                             <div className="carousel-item active">
                                 <div className="row">
                                     {data4.productData4.map((item,index)=>{
                                         return(
                                         <ProductItem4
                                         id={item.id}
                                         img={item.img}
                                         title={t(item.title)}
                                         desc={t(item.desc)}
                                         price={item.price}
                                         exprice={item.exprice}
                                         item={item}
                                         key={index}
                                         />
                                         )
                                     })}
                                </div>
                                <div className="row mt-3 row2">
                                    {data4.productData5.map((item,index)=>{
                                        return(
                                        <ProductItem4
                                        id={item.id}
                                        img={item.img}
                                        title={t(item.title)}
                                        desc={t(item.desc)}
                                        price={item.price}
                                        item={item}
                                        key={index}
                                        />
                                        )
                                    })}
                               </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    {data4.productData6.map((item,index)=>{
                                        return(
                                        <ProductItem4
                                        id={item.id}
                                        img={item.img}
                                        title={t(item.title)}
                                        desc={t(item.desc)}
                                        price={item.price}
                                        item={item}
                                        key={index}
                                        />
                                        )
                                    })}
                                </div>
                                <div className="row row2 mt-3">
                                    {data4.productData7.map((item,index)=>{
                                        return(
                                        <ProductItem4
                                        id={item.id}
                                        img={item.img}
                                        title={t(item.title)}
                                        desc={t(item.desc)}
                                        price={item.price}
                                        exprice={item.exprice}
                                        item={item}
                                        key={index}
                                        />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    {data4.productData8.map((item,index)=>{
                                        return(
                                        <ProductItem4
                                        id={item.id}
                                        img={item.img}
                                        title={t(item.title)}
                                        desc={t(item.desc)}
                                        price={item.price}
                                        exprice={item.exprice}
                                        item={item}
                                        key={index}
                                        />
                                        )
                                    })}
                                </div>
                                <div className="row row2 mt-3">
                                    {data4.productData9.map((item,index)=>{
                                        return(
                                        <ProductItem4
                                        id={item.id}
                                        img={item.img}
                                        title={t(item.title)}
                                        desc={t(item.desc)}
                                        price={item.price}
                                        item={item}
                                        key={index}
                                        />
                                        )
                                    })}
                                </div>
            </div>
                        </div>
                    </div>
                    <img className='img mt-3' src={img29} alt="err" />
                </div>
            </section>
{/*Home Section4 End *


{/*Home Section5 Start */}
            <section className='section5 py-5'>
                <div className="container">
                    <h1 className='mb-3'>{t('text71')}</h1>
                    <div className="line">
                        <hr />
                        <div className="line2"></div>
                    </div>
                    <Slider className='slider' {...settings2}>
                        {data5.productData1.map((item,index)=>{
                            return(
                            <ProductItem5
                            id={item.id}
                            img={item.img}
                            title={t(item.title)}
                            desc={t(item.desc)}
                            price={item.price}
                            item={item}
                            key={index}
                            />
                            )
                        })}
                    </Slider>
                </div>
            </section>
{/*Home Section5 End */}
        </div>
    )
}
Home.defaultProps={
    id: 1
  }

export default Home



