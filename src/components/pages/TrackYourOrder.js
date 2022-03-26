import React from 'react'
import { useTranslation } from 'react-i18next';


const TrackYourOrder = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className='trackyourorder py-5'>
       <div className="container">
       <h1>{t('text156')}</h1>
        <p>{t('text157')}</p>
        <div className="row">
            <div className="input1 col-6">
            <form>
                 <label htmlFor="id">{t('text158')}</label>
                <input className='py-2 px-2' name='id' type="number" placeholder={t('text159')}/>
            </form>
            </div>
            <div className="input2 col-6">
                <form>
                   <label htmlFor="email">{t('text160')}</label>
                   <input className='py-2 px-2' type="email" name='email' placeholder={t('text161')} />
                </form>
              
            </div>
        </div>
        <button>{t('text162')}</button>
       </div>
    </div>
  )
}

export default TrackYourOrder