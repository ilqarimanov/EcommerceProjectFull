import React from 'react'
import { Link } from 'react-router-dom'
import {TiTick} from 'react-icons/ti'
import { useTranslation } from 'react-i18next';


const Account = () => {
    const {t, i18n} = useTranslation();
  return (
    <div className='account'>
        <div className="link d-flex align-items-center justify-content-center">
            <Link to="/" className='link1'>{t('text26')} / </Link>
            <p className='link2'>{t('text9')}</p>
        </div>
        <div className="container py-5">

        <div className='row d-flex justify-content-between'>
            <div className="col-lg-5 col-md-10 col-10 login">
                <h1 className='mb-3'>{t('text88')}</h1>
                 <div className="line">
                     <hr />
                     <div className="line2"></div>
                </div>
                <p>{t('text89')}</p>
                <form className='d-flex flex-column'>
                    <label htmlFor='name'>{t('text90')}</label>
                    <input className='input' type="text" id='name' />
                    <label htmlFor="password">{t('text91')}</label>
                    <input className='input' type="password"  id='password'/>
                    <div className='py-3'><input type="checkbox" />{t('text92')}</div>
                    <button>{t('text93')}</button>
                    <p className='mt-2'>{t('text94')}</p>
                   
                </form>
            </div>
            <div className="col-lg-5 col-md-10 col-10  register">
                <h1 className='mb-3'>{t('text95')}</h1>
                 <div className="line">
                     <hr />
                     <div className="line2"></div>
                </div>
                <p>{t('text96')}</p>
                <form className='d-flex flex-column'>
                    <label htmlFor='name'>{t('text97')} </label>
                    <input className='input' type="text" id='name' />
                    <label htmlFor='email'>{t('text98')}</label>
                    <input className='input' type="email" id='email' />
                    <label htmlFor="password">{t('text99')}</label>
                    <input className='input' type="password"  id='password'/>
                    <p className='py-2'>{t('text100')}</p>
                    <button>{t('text101')}</button>
                    <div className="end mt-3">
                        <h6>{t('text102')}</h6>
                        <p className='mt-4'> <TiTick className='icon'/>{t('text103')}</p>
                        <p>  <TiTick className='icon'/>{t('text104')}</p>
                        <p>  <TiTick className='icon'/>{t('text105')}</p>
                    </div>
                   
                </form>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Account