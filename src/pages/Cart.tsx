import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";
import { removeAllItems, selectCart } from "../redux/slices/cartSlice";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { VePay } from "vepay";

type CartItem = {
  id: string;
  images: string[];
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
  info: string[];
};


const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce(
    (acc: number, item: { count: number }) => acc + item.count,
    0
  );

  const pay = new VePay("0:4aa0e058021bc0393f4593b863f6972512b00b5fcb49ff7d8ea7f74f2ae92674")



  const dispatch = useDispatch();
  return (
    <div className="cart">
      {items.length > 0 ? (
        <>
          <div className="cart__row cart__header">
            <h1 className="title cart__title">Basket</h1>
            <button
              type="button"
              className="cart__button-clear button button_type_primary"
              onClick={() => dispatch(removeAllItems())}
            >
              Empty trash
            </button>
          </div>
          <div className="cart__cards">
            {items.map((item: CartItem) => (
              <CartCard key={item.id} {...item} />
            ))}
          </div>
          <div className="cart__row cart__footer">
            <p className="cart__text">
              Total pizzas:
              <span className="cart__text-label">{totalCount} шт.</span>
            </p>
            <p className="cart__text">
              Order price:
              <span className="cart__text-label">{totalPrice / 100} USDT</span>
            </p>
          </div>
          <div className="cart__row cart__footer">
            <Link to="/" className="button button_type_light cart__button">
              Come back
            </Link>
            <a
              onClick={() => pay.pay('1', (totalPrice / 100).toString())}
              className="button button_type_primary-outlined cart__button"
            >
              Pay
            </a>
          </div>
        </>
      ) : (
        <div className="cart__empty">
          <h1 className="title cart__empty-title">Cart is empty ☹️</h1>
          <p className="cart__empty-descr">
            You probably haven't ordered pizza yet. In order to
            order a pizza, go to the main page.
          </p>
          <Link
            to="/"
            className="cart__empty-button button button_type_primary"
          >
            Come back
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
