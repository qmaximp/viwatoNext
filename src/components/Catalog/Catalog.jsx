import React, { useEffect, useState } from "react";
import CatalogItem from "../CatalogItem/CatalogItem";
import css from "./Catalog.module.scss";
import Products from "@/app/api/cartProduct.mockData";

const Catalog = ({ selectedCategory = 0 }) => {
  const [filtredProducts, setFiltredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory != 0) {
      let newProducts = [];
      Products.map((el) => {
        if (el?.category && el?.category == selectedCategory) {
          newProducts.push(el);
        }
      });
      setFiltredProducts(newProducts);
    } else {
      setFiltredProducts(Products);
    }
  }, [selectedCategory]);

  return (
    <div className={css.catalog}>
      {filtredProducts &&
        filtredProducts.map((cartProduct) => (
          <CatalogItem
            key={cartProduct.id}
            id={cartProduct.id}
            title={cartProduct.title}
            price={cartProduct.price}
          />
        ))}
    </div>
  );
};
export default Catalog;
