import img31 from '../../assets/img/img31.png'
import img32 from '../../assets/img/img32.png'
import img33 from '../../assets/img/img33.png'
import img34 from '../../assets/img/img34.png'
import img35 from '../../assets/img/img35.png'
import img36 from '../../assets/img/img36.png'
import img37 from '../../assets/img/img37.png'
import img38 from '../../assets/img/img38.png'
import img39 from '../../assets/img/img39.png'
import {AiFillStar} from 'react-icons/ai'

const data6 = {
    productData1:[
        {
            id:"60",
            img:img31,
            desc: "text357",
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: '$1,300.00'
        },
        {
            id:"61",
            img:img32,
            desc: "text358",
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: '$1,100.00'
        },
        {
            id:"62",
            img:img33,
            desc: "text359",
            price: <div className='d-flex'> <p style={{color: "red"}}>$750.00</p> <del className='ms-2'>$780.00</del> </div>
        }
    ],
    productData2:[
        {
            id:"63",
            img:img34,
            desc: "text360",
            price:  <div className='d-flex'> <p style={{color: "red"}}>$79.00</p> <del className='ms-2'>$99.00</del> </div>
        },
        {
            id:"64",
            img:img35,
            desc: "text361",
            price:  '$2,299.00'
        },
        {
            id:"65",
            img:img36,
            desc: "text362",
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: <div className='d-flex'> <p style={{color: "red"}}>$2,100.00</p> <del className='ms-2'>$2,299.00</del> </div>
        }
    ],
    productData3:[
        {
            id:"66",
            img:img37,
            desc: "text363",
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: <div className='d-flex'> <p style={{color: "red"}}>$1,200.00</p> <del className='ms-2'>$1,218.00</del> </div>
        },
        {
            id:"67",
            img:img38,
            desc: "text364",
            star: <div><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>,
            price: <div className='d-flex'> <p style={{color: "red"}}>$700.00</p> <del className='ms-2'>$725.00</del> </div>
        },
        {
            id:"68",
            img:img39,
            desc: "text365",
            price: <div className='d-flex'> <p style={{color: "red"}}>$200.00</p> <del className='ms-2'>$210.00</del> </div>
        }
    ],
};
export default data6;