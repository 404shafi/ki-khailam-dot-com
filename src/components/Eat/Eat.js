import React, { useEffect, useState } from "react";
import DisplayFoods from "../DisplayFoods/DisplayFoods";

const Eat = ({ addItemToEatenList, handleMealType, mealType }) => {
  const [foodCategory, setFoodCategory] = useState("Vegetables");

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((resp) => resp.json())
      .then((data) => setFoods(data));
  }, []);
  const handleFoodCategory = (e) => {
    setFoodCategory(e.target.value);
  };

  return (
    <div className="container">
      <h1>Add Meal Type</h1>
      <select className="col-10" value={mealType} onChange={handleMealType}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>
      <h1>Select The Food Category</h1>
      <select
        value={foodCategory}
        onChange={handleFoodCategory}
        className="col-10"
      >
        <option value="Vegetables">Vegetables</option>
        <option value="Fish">Fish</option>
        <option value="Meat">Meat</option>
        <option value="Fruits">Fruits</option>
        <option value="Snacks">Snacks</option>
      </select>
      <DisplayFoods
        foods={foods.filter((food) => food.category === foodCategory)}
        addItemToEatenList={addItemToEatenList}
        mealType={mealType}
      ></DisplayFoods>
    </div>
  );
};

export default Eat;
