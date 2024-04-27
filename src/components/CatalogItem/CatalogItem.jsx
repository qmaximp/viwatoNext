import Image from "next/image";
import React from "react";
import placeholder from "../../../public/image-placeholder.png";
import css from "./CatalogItem.module.scss";
import Link from "next/link";

const CatalogItem = ({ id, title, price }) => {
  return (
    <Link href={`/product/${id}/`} className={css.link__CatalogItem}>
      <div className={css.CatalogItem}>
        <div>
          <Image alt="" src={placeholder}></Image>
          <h3>{title}</h3>
          <p>
            <b>цена:</b>
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CatalogItem;
