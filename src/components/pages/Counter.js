import React, {useState, useEffect, useRef} from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next';

const Counter = () => {
    const {t, i18n} = useTranslation();
    const [date, setDate] = useState(()=>{
        return moment().add(10, "hours")
    })
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");

    let interval = useRef();

    useEffect(()=>{
        start();
        return clearInterval(interval.current);
    }, [date])
    const start = ()=>{
        interval = setInterval(()=>{
            const now = moment();
            const distance = date - now;
            const hours = moment.duration(distance).hours();
            const minutes = moment.duration(distance).minutes();
            const seconds = moment.duration(distance).seconds();

            if(distance<0){
                clearInterval(interval.current);
            }else{
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        },1000)
    }
  return (
    <div className='counter d-flex justify-content-between'>
        <div>
            <span className='time d-flex justify-content-center align-items-center'>{hours}</span>
            <span  className='timename'>{t('text114')}</span>
        </div>
        <p className='mt-3'>:</p>
        <div>
            <span className='time  d-flex justify-content-center align-items-center'>{minutes}</span>
            <span  className='timename'>{t('text115')}</span>
        </div>
        <p  className='mt-3'>:</p>
        <div>
            <span className='time  d-flex justify-content-center align-items-center'>{seconds}</span>
            <span className='timename'>{t('text116')}</span>
        </div>
    </div>
  )
}

export default Counter