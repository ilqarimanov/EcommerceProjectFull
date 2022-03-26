import React,{useState} from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {MdDelete} from 'react-icons/md'


const Card = () => {
  const { t } = useTranslation();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center"> Your Card is Empty</h1>;
  return (
    
    <div className="card-section">
      <div className="container">
        <h1 className="text-center">{t("text654")}</h1>
        <div className="row">
          <div className="col col-lg-8 col-md-12 col--12">
            {items.map((item, index) => {
              return (
                <div className="cart-item  " key={index} id="sebet-cart">
                  <div className="cart-img">
                    <img className="cart-img" src={item.img} alt="err" />
                  </div>
                  <div className="cart-text">
                    <div className="cart-item-text">
                      <h2> {t(item.title)}</h2>
                      <p>{t("text658")}:{item.quantity} </p>
                      <h2 className="price"> {item.price} $</h2>
                      <div className="cart-number cart-number-danger">
                        <button
                          className="btn ms-2"
                          id="count-btn1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="btn ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-btn">
                      <button
                        className="btn fs-3  ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <MdDelete/>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col col-lg-4 col-sm-12">
            <div className="cart-total " id="cart-total">
              <div className="yekun ">
                <h4>{t("text655")}</h4> <h4>{cartTotal} $</h4>
              </div>
              <p className="say">{t("text656")} : {totalItems}</p>
              <p>{t("text659")}: {cartTotal} $</p>
              <p>Cart : {totalUniqueItems}</p>
              <div className="col-auto d-flex align-items-center justify-content-center w-100 mt-5">
                <button className="btn1  m-2" onClick={() => emptyCart()}>
                {t("text657")}
                </button>
           <Link to="/checkout">     <button className="btn2  m-2">{t("text660")}</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Card;