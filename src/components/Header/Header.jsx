"use client";
import React, { useState } from "react";
import css from "./Header.module.scss";
import Link from "next/link";
import categories_data from "../module.contants";

const Header = ({ categorySetter }) => {
  return (
    <div className={css.header}>
      <Link href={"./api/connect.php"}> ashfajlhdjh</Link>
      <div className={css.header__link}>
        <Link href={"/"}>catalog</Link>
        <Link href={"/createProduct/"}>create ad</Link>
      </div>
      <div className={css.header__logo}>
        <h1>WIVATO</h1>
      </div>
      <div className={css.header__filter}>
        <p>Выберите категорию:</p>
        <select
          name="category"
          id="1"
          onChange={(e) => {
            categorySetter ? categorySetter(e.target.value) : null;
          }}>
          {categories_data &&
            categories_data.map((category) => {
              return <option value={category.id}>{category.title}</option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default Header;
