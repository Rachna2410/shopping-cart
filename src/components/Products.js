import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import Card from "./Card";
import { addItems } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const data = useSelector((state) => state.cartItems.data);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const addToCart = (product) => {
    dispatch(addItems([...data, product]));
    console.log("data", data);
  };

  const showCartItems = () => {
    navigate("/cartItems");
  };
  return (
    <div className="">
      <header className="d-flex justify-content-center mb-2">
        <h1>Products</h1>
        <button
          className="btn btn-primary p-2 justify-content-end"
          onClick={showCartItems}
        >
          Show Cart items
        </button>
      </header>

      <div className="card-list">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.images}
            title={product.title}
            description={product.description}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
