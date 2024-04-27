import React from "react";
import css from "./ProductItem.module.scss";
import Image from "next/image";
import placeholder from "../../../public/image-placeholder.png";
import Link from "next/link";

const ProductItem = ({ id, title, descripteon, price, number, userName }) => {
  return (
    <div className={css.productItem} id={id}>
      <div className={css.productItem__img}>
        <Image alt="" src={placeholder}></Image>
      </div>
      <div className={css.productItem__description}>
        <h2>{title}</h2>
        <p>{descripteon}</p>
        <h3>
          <b>Цена:</b> {price}
        </h3>
        <h3>Категория: машины</h3>
        <p>{number}</p>
        <p> {userName}</p>
      </div>
    </div>
  );
};

export default ProductItem;
