import React, { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "./Api";
import Navbar from "./Navbar";
import "../styles/product.css";

export default function Product() {
  // const [products, setProducts] = useState({
  //     id: '',
  //     userid: '',
  //     name: '',
  //     description: '',
  //     price: '',
  //     stock: ''
  // })
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        console.log(response);
        setProducts(response);
        setMessage("Products fetched successfully.");
      } catch {
        setMessage("Error fetching products");
      }
    };
    fetchProducts();
  }, []);

  const handleEdit = () => {};
  return (
    <div className="inner-page">
      <div>Products</div>
      {/* <p>{products}</p> */}
      {products ? (
        <>
          <div className="product-container">
            {products.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <strong>{product?.name}</strong> - ${product?.price}
                  <div>{product?.description}</div>
                  <div>{product?.stock}</div>
                  <button onClick={handleEdit}>Edit</button>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        "No products found"
      )}
      <p>{message}</p>
    </div>
  );
}
