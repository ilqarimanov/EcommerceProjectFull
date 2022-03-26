import React,{useState, useEffect} from 'react';
import AllProductsItem from './AllProductsItem';
import allproductsdata from '../data/allproductsdata';
import { useTranslation } from 'react-i18next';

const AllProducts = (props) => {
  const {t, i18n} = useTranslation();
  const [id, setid] = useState(props.id);
  
  return (
    <div className='allproducts pt-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <table>
              <tr>
                <th>{t('text163')}</th>
              </tr>
              <tr id="1" onClick={()=>setid(1)} style={{fontWeight: id=== 1 ? 'bold' : "normal", color: id=== 1 ? 'red' : "black"}} >
                <td>{t('text164')}</td>
              </tr>
              <tr id="2" onClick={()=>setid(2)} style={{fontWeight: id=== 2 ? 'bold' : "normal", color: id=== 2 ? 'red' : "black"}}>
                <td>{t('text165')}</td>
              </tr>
              <tr id="3" onClick={()=>setid(3)} style={{fontWeight: id=== 3 ? 'bold' : "normal", color: id=== 3 ? 'red' : "black"}}>
                <td>{t('text166')}</td>
              </tr>
              <tr id="4" onClick={()=>setid(4)} style={{fontWeight: id=== 4 ? 'bold' : "normal", color: id=== 4 ? 'red' : "black"}}>
                <td>{t('text167')}</td>
              </tr>
              <tr id="5" onClick={()=>setid(5)} style={{fontWeight: id=== 5 ? 'bold' : "normal", color: id=== 5 ? 'red' : "black"}}>
                <td>{t('text168')}</td>
              </tr>
              <tr id="6" onClick={()=>setid(6)} style={{fontWeight: id=== 6 ? 'bold' : "normal", color: id=== 6 ? 'red' : "black"}}>
                <td>{t('text169')}</td>
              </tr>
              <tr id="7" onClick={()=>setid(7)} style={{fontWeight: id=== 7 ? 'bold' : "normal", color: id=== 7 ? 'red' : "black"}}>
                <td>{t('text170')}</td>
              </tr>
              <tr id="8" onClick={()=>setid(8)} style={{fontWeight: id=== 8 ? 'bold' : "normal", color: id=== 8 ? 'red' : "black" }}>
                <td>{t('text171')}</td>
              </tr>
              <tr id="9" onClick={()=>setid(9)} style={{fontWeight: id=== 9 ? 'bold' : "normal", color: id=== 9 ? 'red' : "black"}}>
                <td>{t('text172')}</td>
              </tr>
              <tr className='tableend' id="10" onClick={()=>setid(10)} style={{fontWeight: id===10 ? 'bold' : "normal", color: id===10 ? 'red' : "black"}}>
                <td>{t('text173')}</td>
              </tr>
            </table>
          </div>
          <div className="col-lg-8 col-md-12 col-12">
            {(() => {
              if (id==1) {
                return(
                  <div className='row'>
                    <h3 className='mb-4'>{t('text164')}</h3>
                    {allproductsdata.productData1.map((item,index)=>{
                      return(
                      <AllProductsItem
                      img={item.img}
                      title={t(item.title)}
                      desc={t(item.desc)}
                      price={item.price}
                      item={item}
                      key={index}
                      />
                      )})}
                  </div>
                  )}else if(id==2){
                    return(
                    <div className='row row3'>
                      <h3 className='mb-4'>{t('text165')}</h3>
                      {allproductsdata.productData2.map((item,index)=>{
                        return(
                        <AllProductsItem
                        img={item.img}
                        title={t(item.title)}
                        desc={t(item.desc)}
                        price={item.price}
                        item={item}
                        key={index}
                        />
                        )})}
                    </div>
                    )}else if(id==3){
                      return(
                      <div className='row row3'>
                        <h3 className='mb-4'>{t('text166')}</h3>
                        {allproductsdata.productData3.map((item,index)=>{
                          return(
                          <AllProductsItem
                          img={item.img}
                          title={t(item.title)}
                          desc={t(item.desc)}
                          price={item.price}
                          item={item}
                          key={index}
                          />
                          )})}
                      </div>
                      )}else if(id==4){
                        return(
                        <div className='row row3'>
                          <h3 className='mb-4'>{t('text167')}</h3>
                          {allproductsdata.productData4.map((item,index)=>{
                            return(
                            <AllProductsItem
                            img={item.img}
                            title={t(item.title)}
                            desc={t(item.desc)}
                            price={item.price}
                            item={item}
                            key={index}
                            />
                            )})}
                        </div>
                        )}else if(id==5){
                          return(
                          <div className='row row3'>
                            <h3 className='mb-4'>{t('text168')}</h3>
                            {allproductsdata.productData5.map((item,index)=>{
                              return(
                              <AllProductsItem
                              img={item.img}
                              title={t(item.title)}
                              desc={t(item.desc)}
                              price={item.price}
                              item={item}
                              key={index}
                              />
                              )})}
                          </div>
                          )}else if(id==6){
                            return(
                            <div className='row row3'>
                              <h3 className='mb-4'>{t('text169')}</h3>
                              {allproductsdata.productData6.map((item,index)=>{
                                return(
                                <AllProductsItem
                                img={item.img}
                                title={t(item.title)}
                                desc={t(item.desc)}
                                price={item.price}
                                item={item}
                                key={index}
                                />
                                )})}
                            </div>
                            )}else if(id==7){
                              return(
                              <div className='row row3'>
                                <h3 className='mb-4'>{t('text170')}</h3>
                                {allproductsdata.productData7.map((item,index)=>{
                                  return(
                                  <AllProductsItem
                                  img={item.img}
                                  title={t(item.title)}
                                  desc={t(item.desc)}
                                  price={item.price}
                                  item={item}
                                  key={index}
                                  />
                                  )})}
                              </div>
                              )}else if(id==8){
                                return(
                                <div className='row row3'>
                                  <h3 className='mb-4'>{t('text171')}</h3>
                                  {allproductsdata.productData8.map((item,index)=>{
                                    return(
                                    <AllProductsItem
                                    img={item.img}
                                    title={t(item.title)}
                                    desc={t(item.desc)}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                    />
                                    )})}
                                </div>
                                )}else if(id==9){
                                  return(
                                  <div className='row row3'>
                                    <h3 className='mb-4'>{t('text172')}</h3>
                                    {allproductsdata.productData9.map((item,index)=>{
                                      return(
                                      <AllProductsItem
                                      img={item.img}
                                      title={t(item.title)}
                                      desc={t(item.desc)}
                                      price={item.price}
                                      item={item}
                                      key={index}
                                      />
                                      )})}
                                  </div>
                                  )}else if(id==10){
                                    return(
                                    <div className='row row3'>
                                      <h3 className='mb-4'>{t('text173')}</h3>
                                      {allproductsdata.productData10.map((item,index)=>{
                                        return(
                                        <AllProductsItem
                                        img={item.img}
                                        title={t(item.title)}
                                        desc={t(item.desc)}
                                        price={item.price}
                                        item={item}
                                        key={index}
                                        />
                                        )})}
                                    </div>
                                    )}
            })()} 
          </div>
        </div>
      </div>
    </div>
  )
}
AllProducts.defaultProps={
  id: 1
}
export default AllProducts