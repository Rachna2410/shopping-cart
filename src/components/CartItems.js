import React from "react";
import Card from "./Card";
import { removeItem } from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItems = () => {
  const data = useSelector((state) => state.cartItems.data);
  const dispatch = useDispatch();
  const removeToCart = (index) => {
    dispatch(removeItem(index));
  };
  return (
    <div>
      <div className="">
        <header className="d-flex justify-content-center mb-2">
          <h1>Products</h1>
          <Link to={"/"} className="btn btn-primary p-2 justify-content-end">
            Back
          </Link>
        </header>

        <div className="card-list">
          {data && data.length > 0
            ? data.map((product, index) => (
                <Card
                  key={product.id}
                  image={product.images}
                  title={product.title}
                  description={product.description}
                  onClick={() => removeToCart(index)}
                  buttonName={"Remove"}
                />
              ))
            : "There is no items in cart"}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
