"use client";

import React, { useEffect, useState } from "react";
import css from "./FormCreateProduct.module.scss";
import categories_data from "../module.contants";
import axios from "axios";

const FormCreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    let data = {
      title,
      description,
      cost,
      category,
      phone,
      name,
    };
    axios.post("url", data);
  };
  console.log(handleSubmit);

  return (
    <div className={css.formCreateProduct}>
      <input
        type="text"
        placeholder="загаловок"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        placeholder="описание"
        required
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="цена"
        required
        value={cost}
        onChange={(e) => {
          setCost(e.target.value);
        }}
      />
      <div>
        <p>Выберите категорию</p>
        <select
          name="category"
          id="1"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}>
          {categories_data &&
            categories_data.map((el) => {
              return <option value={el.id}>{el.title}</option>;
            })}
        </select>
      </div>
      <input
        type="phone"
        placeholder="Укажите ваш телефон"
        required
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Укажите ваше ФИО"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSubmit}>
        Разместить
      </button>
    </div>
  );
};

export default FormCreateProduct;
