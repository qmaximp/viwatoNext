"use client";

import Catalog from "@/components/Catalog/Catalog";
import CatalogItem from "@/components/CatalogItem/CatalogItem";
import Header from "@/components/Header/Header";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div>
      <Header categorySetter={setSelectedCategory} />
      <Catalog selectedCategory={selectedCategory} />
    </div>
  );
};

export default page;
