import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const { t } = useTranslation();
  return (
    <div className="checkout-sec">
      <div className="container">
        <div className="checkout-text">
          <h2 className="text-center">{t("text661")}</h2>
        </div>
       
        <div className="checkout-form">
            <div className="levels">
                <div className="left">
                    <div className="box">1</div>
                    <h4>{t("text662")}</h4>
                </div>
                <div className="line"></div>
                <div className="right">
                    <div className="box">2</div>
                    <h4>{t("text663")}</h4>
                </div>
            </div>
            <div className="content-text">
            <h3>{t("text662")}</h3>
        </div>
          <div className="row">
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="input">
                <label for="name">
                {t("text664")} <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="one"
                  required
                />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="input">
                <label for="lname">
                {t("text665")} <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="input">
                <label for="phone">
                {t("text666")} <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="input">
                <label for="email">
                  E-mail <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email "
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="input">
                <label for="mailcode">{t("text667")}</label> <br />
                <input
                  type="text"
                  id="mailcode"
                  name="mailcode"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="input">
                <label for="region">
                  Region <span>*</span>{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="region"
                  name="region"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-12 ">
              <div className="input">
                <label for="city">
                {t("text668")}<span>*</span>{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="input">
                <label for="unvan">
                {t("text669")} <span>*</span>{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="unvan"
                  name="unvan"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>

            <div className="col col-lg-12 col-md-12 col-sm-6" id="btn">
             <Link to="/card"> <button className="back">{t("text670")}</button></Link>
              <Link to="/checkoutdetails"><button className="next">{t("text671")}</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;