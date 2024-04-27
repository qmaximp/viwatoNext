"use client";
import ProductItem from "@/components/ProductItem/ProductItem";
import Products from "@/app/api/cartProduct.mockData";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [product, setProduct] = useState();
  const pathname = usePathname();
  useEffect(() => {
    axios.get("http://localhost/index.php").then((res) => {
      let prod;
      res.data.map((el) => {
        if (el.id == pathname.split("/")[pathname.split("/").length - 1]) {
          prod = el;
        }
      });
      setProduct(prod);
    });
  }, []);
  return (
    <div>
      {product &&
        product.id &&
        product.title(
          <div>
            {product.id} {product.title}
          </div>
        )}
      {/*  {product && product.id && product.title ? (
        <div>
          {product.id} {product.title}
        </div>
      ) : (
        <p>Loading</p>
      )} */}
      {/* {Products.map((el: any) => (
        <>
          {el.id == pathname.split("/")[pathname.split("/").length - 1] ? (
            <ProductItem
              key={el.id}
              id={el.id}
              title={el.title}
              descripteon={el.descripteon}
              price={el.price}
              number={el.number}
              userName={el.userName}
            />
          ) : null}
        </>
      ))} */}
    </div>
  );
};

export default page;
