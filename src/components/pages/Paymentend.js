import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Paymentend = () => {
    const { t } = useTranslation();
    return (
        <div className='paymentend-sec'>
           <div className="container">
           <div className="checkout-text">
          <h2 className="text-center">{t("text661")}</h2>
        </div>
               <div className="paymentend-form">
               <div className="levels">
                <div className="left">
                    <div className="box"><i class="fa-solid fa-check"></i></div>
                    <h4>{t("text662")}</h4>
                </div>
                <div className="line"></div>
                <div className="right">
                    <div className="box"><i class="fa-solid fa-check"></i></div>
                    <h4>{t("text664")}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-12 text-center">
                    <div className="payend">
                     <h3><span>{t("text679")}</span>{t("text680")}</h3> 

                     <Link to="/"><button className="end">{t("text681")}</button></Link>
                    </div>
                </div>
            </div>
               </div>
           </div>
        </div>
    );
};

export default Paymentend;