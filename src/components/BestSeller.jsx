import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext"; // Проверь правильный путь
import Title from "./Title"; // Убедись, что Title импортируется корректно

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products) {
      const bestProduct = products.filter((item) => item.bestSeller);
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit maxime quidem facere quia optio, totam aliquid temporibus inventore cupiditate deleniti atque saepe recusandae quos odit laborum accusantium minus consectetur.
        </p>
      </div>
    </div>
  );
}

export default BestSeller;
