import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import Popup from '../pages/Popup'
//images import start
import logodark from '../../assets/img/logodark.PNG'
import logolight from '../../assets/img/logolight.PNG'
import logo2 from '../../assets/img/logo2.png'
import flag1 from '../../assets/img/flag1.png'
import flag2 from '../../assets/img/flag2.png'
//images import end
//icons import start
import {RiSearchLine} from 'react-icons/ri'
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineShoppingBag} from 'react-icons/md'
import {HiSun} from 'react-icons/hi'
import {WiMoonWaxingCrescent3} from 'react-icons/wi'
//icons import end
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const {t, i18n} = useTranslation();
    function handleClick(lang){
        i18n.changeLanguage(lang)
    }
    //light-dark mood start
    const [mode, setMode] = useState(()=>localStorage.getItem("mode"));
    useEffect(()=>{
        if(mode === "dark"){
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        }else{
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode])
    //light-dark mood end
    const{totalItems, cartTotal}=useCart();
    const [buttonPopup, setButtonPopup] = useState(false);   //popup
    const [isMobile, setIsMobile] = useState(false);         //responsive
    
    return (
    <header>
        {/* light-dark mood start*/}
        <div className='mode'>
            <span style={{color: mode=== "dark" ? 'grey' : "yellow"}}><HiSun/></span>
            <div className="switch-checkbox" >
                <label className='switch'>
                    <input type="checkbox" 
                    onClick={()=> 
                    setMode(mode => mode=== "dark" ? "light" : "dark")}/>
                    <span className='slide1 round'></span>
                </label>
            </div>
            <span className='me-2' style={{color: mode=== "dark" ? '#c96dfd' :  "grey"}}>
                <WiMoonWaxingCrescent3/>
            </span>
        </div>   
        {/* light-dark mood end*/}

        <div className="head1 pt-1">
            <div className="container  d-flex justify-content-between align-items-center">
                <div className="text1 d-flex align-items-center">
                    <p>{t('text1')}</p>
                </div>
                <div className="text2 d-flex justify-content-between align-items-center">
                    <p onClick={()=>setButtonPopup(true)} className='p'>{t('text2')}</p>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h3 className='popuptitle'>{t('text3')}</h3>
                        <p> <b> <i>{t('text4')} </i></b>{t('text5')} </p>
                        <b>{t('text6')}</b>
                        <p className='mt-3'> (800) 8001-8588, (0600) 874 548</p>
                    </Popup>
                    <NavLink to="/trackyourorder" className='p mb-3'>{t('text7')}</NavLink>
                    <NavLink to='/card' className='p mb-3'>{t('text8')}</NavLink>
                    <NavLink to='/account' className='p mb-3'>{t('text9')}</NavLink>
                </div>
            </div>
        </div>
        
        <div className="head2">
            <div className="container d-flex align-items-center justify-content-between">
                <div className='logo d-flex align-items-center justify-content-between'>
                    { mode=== "dark" ? 
                    <NavLink to="/"><img src={logodark} className="logo" alt="err"/> </NavLink>
                     : 
                    <NavLink to="/"><img src={logolight} className="logo" alt="err"/></NavLink>
                    }
                </div>
                
                <div className="search">
                    <form className='d-flex align-items-center justify-content-between'>
                        <input type="search" placeholder={t('text682')}/>
                        <select>
                            <option selected>{t('text10')}</option>
                            <option>{t('text11')}</option>
                            <option>{t('text12')}</option>
                            <option>{t('text13')}</option>
                            <option>{t('text14')}</option>
                            <option>{t('text15')}</option>
                            <option>{t('text16')}</option>
                            <option>{t('text17')}</option>
                            <option>{t('text18')}</option>
                            <option>{t('text19')}</option>
                            <option>{t('text20')}</option>
                            <option>{t('text21')}</option>
                            <option>{t('text22')}</option>
                            <option>{t('text23')}</option>
                            <option>{t('text24')}</option>
                            <option>{t('text25')}</option>
                        </select>
                        <div className="button d-flex align-items-center justify-content-center">
                            <RiSearchLine/>
                        </div>
                    </form>
                </div>
                <div className="icons d-flex align-items-center justify-content-between">
                    <VscAccount className='icon'/>
                    <div className="dropdown">
                    <button className="btn dropdown-toggle fs-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    🌐
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                       
                        <li>
                            <button className="dropdown-item"
                            onClick={()=>handleClick('en')} >
                                <img src={flag2} alt="err"/> <b> En </b>
                            </button>
                        </li>
                        <li>
                            <button className="dropdown-item"
                            onClick={()=>handleClick('az')} >
                                <img src={flag1} alt="err"/> <b> Az</b> 
                            </button>
                        </li>
                        
                    </ul>
                </div>
                    <NavLink to="/card" className="nav-link active d-flex link2" aria-current="page" href="#">
                        <MdOutlineShoppingBag className='icon'/>
                        <div className="number">{totalItems}</div>
                        <div className="price ms-2">${cartTotal}</div>
                    </NavLink>

                </div>
            </div>
        </div>
            
        <nav className='navbar'>
            <div className='logo d-flex align-items-center justify-content-between'>
                <img src={logo2} className="mb-3"  alt="err"/>
            </div>
            <ul className={isMobile? "nav-links-mobile" : "nav-links"}
            onClick={()=>setIsMobile(false)}
            >  
                <NavLink to='/' className="link"  activeClassName="active" exact ><li>{t('text26')}</li></NavLink>
                <NavLink to='/about'  className="link"  activeClassName="active" ><li>{t('text27')}</li></NavLink>
                <NavLink to='/contact'  className="link"  activeClassName="active" ><li>{t('text28')}</li></NavLink>
                <NavLink to='/blog'  className="link"  activeClassName="active" ><li>{t('text29')}</li></NavLink>
                <NavLink to="/allproducts" className='nav-link link2 link3 active'><li>{t('text32')}</li></NavLink>
                <NavLink to="/card" className="nav-link link2  active d-flex" aria-current="page" href="#">
                    <MdOutlineShoppingBag className='icon'/><div>({totalItems})</div>
                </NavLink>
              
          
            </ul>
            <button className='mobile-menu-icon'
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <AiOutlineClose/> : <AiOutlineMenu/> }
            </button>   
        </nav>
    </header>
  )
}
export default Nav