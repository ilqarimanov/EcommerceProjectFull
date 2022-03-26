import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t, i18n} = useTranslation();
  const [show1, setShow1]= useState(true)
  const [show2, setShow2]= useState(false)
  const [show3, setShow3]= useState(false)
  const [show4, setShow4]= useState(false)
  const [show5, setShow5]= useState(false)
  return (
    <div className='about'>
      <div className="aboutheader d-flex flex-column align-items-center justify-content-center">
        <h1>{t('text72')}</h1>
        <p>{t('text73')}</p>
      </div>

      <div className="aboutsection1 py-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
              <div className="col1 col-lg-4 col-md-5 col-11">
                  <div className="img1"></div>
                  <div className="text d-flex flex-column align-items-center justify-content-center">
                      <h5 className='py-4'>{t('text74')}</h5>
                      <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                  </div>
               </div>

               <div className="col1 col-lg-4 col-md-5 col-11">
                  <div className="img2"></div>
                  <div className="text d-flex flex-column align-items-center justify-content-center">
                      <h5 className='py-4'>{t('text75')}</h5>
                      <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                  </div>
              </div>

              <div className="col1 col-lg-4 col-md-5 col-11">
                  <div className="img3"></div>
                  <div className="text  d-flex flex-column align-items-center justify-content-center">
                      <h5 className='py-4'>{t('text76')}</h5>
                      <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus.</p>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div className="aboutsection2 py-5 my-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
             <div className="col-lg-2 col-md-4 col-5 my-4">
                <div className="img1"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>{t('text77')}</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-5 my-4">
                <div className="img2"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>{t('text77')}</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-5 my-4">
                <div className="img3"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>{t('text77')}</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-5 my-4">
                <div className="img4"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>{t('text77')}</p>
                </div>
             </div>

             <div className="col-lg-2 col-md-4 col-5 my-4">
                <div className="img5"></div>
                <div className="text text-center">
                  <h5>Thomas Snow</h5>
                  <p>{t('text77')}</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="aboutsection3">
        <div className="container d-flex justify-content-between">
          <div className="row row1 d-flex justify-content-between">
            <div className='col-lg-6 col-md-10'>
              <div className="text">
                 <h5 className='mb-5'>{t('text78')}</h5>
                 <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
              </div>
              <div className="text py-3">
                 <h5 className='mb-5'>{t('text79')}</h5>
                 <p>Mauris rhoncus aliquet purus, a ornare nisi euismod in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet eu metus vel ornare. Nullam in risus vel orci feugiat vestibulum. In sed aliquam mi. Nullam condimentum sollicitudin dui.</p>
              </div>
            </div>

            <div className='col-lg-6 col-md-10'>
                <div className="text">
                   <h5 className='mb-5'>{t('text80')}</h5>
                   <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur. Vestibulum velit nibh, egestas vel faucibus vitae.</p>
                </div>
                <div className="text py-3">
                   <h5  className='mb-5'>{t('text81')}</h5>
                   <p>Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.</p>
                </div>
            </div>

          </div>

          <div className="row row2">
            <div className='buttons'>
            <div className="mt-5">
                  <div className="button d-flex">
                     <button
                      onClick={()=>setShow1(
                        !show1, 
                        show2? setShow2(false) : null ,
                        show3? setShow3(false) : null ,
                        show4? setShow4(false) : null ,
                        show5? setShow5(false) : null 
                      )} 
                      style={{ backgroundColor: show1 ? '#fed700' : "#EFEFEF"}}>
                      {show1 ? <h4>-</h4> : <h4>+</h4>}
                    </button>
                     <p className='title'>{t('text83')}</p>
                  </div>
                  {
                     show1 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                  <div className="button d-flex">
                     <button onClick={()=>
                      setShow2(!show2,
                        show1? setShow1(false) : null ,
                        show3? setShow3(false) : null ,
                        show4? setShow4(false) : null ,
                        show5? setShow5(false) : null 
                        )} 
                      style={{ backgroundColor: show2 ? '#fed700' : "#EFEFEF"}}>
                        {show2 ? <h4>-</h4> : <h4>+</h4>}
                      </button>
                     <p className='title'>{t('text84')}</p>
                  </div>
                  {
                     show2 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                <div className="button d-flex">
                     <button
                      onClick={()=>
                        setShow3(
                          !show3,
                          show1? setShow1(false) : null ,
                          show2? setShow2(false) : null ,
                          show4? setShow4(false) : null ,
                          show5? setShow5(false) : null 
                          )} 
                        style={{ backgroundColor: show3 ? '#fed700' : "#EFEFEF"}}>
                        {show3 ? <h4>-</h4> : <h4>+</h4>}
                     </button>
                     <p className='title'>{t('text85')}</p>
                  </div>
                  {
                     show3 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                  <div className="button d-flex">
                     <button
                      onClick={()=>
                        setShow4(
                          !show4,
                          show1? setShow1(false) : null ,
                          show2? setShow2(false) : null ,
                          show3? setShow3(false) : null ,
                          show5? setShow5(false) : null 
                           )} 
                      style={{ backgroundColor: show4 ? '#fed700' : "#EFEFEF"}}>
                      {show4 ? <h4>-</h4> : <h4>+</h4>}
                    </button>
                     <p className='title'>{t('text86')}</p>
                  </div>
                  {
                     show4 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>

            <div>
                  <div className="button d-flex">
                     <button
                      onClick={()=>
                      setShow5(
                        !show5, 
                        show1? setShow1(false) : null ,
                        show2? setShow2(false) : null ,
                        show3? setShow3(false) : null ,
                        show4? setShow4(false) : null 
                        )} 
                      style={{ backgroundColor: show5 ? '#fed700' : "#EFEFEF"}}>
                      {show5 ? <h4>-</h4> : <h4>+</h4>}
                    </button>
                     <p className='title'>{t('text87')}</p>
                  </div>
                  {
                     show5 ? <p>Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur.</p> : null
                  }
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About