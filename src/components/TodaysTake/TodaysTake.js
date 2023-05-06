import React, { useContext } from "react";
import "./TodaysTake.css";
import { EatenFoodsContext } from "../../App";

const TodaysTake = ({ mealType }) => {
  const eatenItems = useContext(EatenFoodsContext);
  console.log(eatenItems);
  const breakfast = eatenItems.filter((food) => food.mealType === "Breakfast");
  const lunch = eatenItems.filter((food) => food.mealType === "Lunch");
  const dinner = eatenItems.filter((food) => food.mealType === "Dinner");
  const snacks = eatenItems.filter((food) => food.mealType === "Snacks");
  return (
    <div className="p-2">
      <h1>
        {eatenItems.length === 0 &&
          "Please Eat Something,,, You Must Be Hungry"}
      </h1>
      {eatenItems.length > 0 && (
        <div className="d-flex justify-content-between">
          <div>
            <h1>Breakfast</h1>
            <ul>
              {breakfast.length > 0 &&
                breakfast.map((food) => <li key={food.id}>{food.name}</li>)}
            </ul>
          </div>
          <div>
            <h1>Lunch</h1>
            {lunch.length > 0 &&
              lunch.map((food) => <li key={food.id}>{food.name}</li>)}
          </div>
          <div>
            <h1>Dinner</h1>
            <ul>
              {dinner.length > 0 &&
                dinner.map((food) => <li key={food.id}>{food.name}</li>)}
            </ul>
          </div>
          <div>
            <h1>Snacks</h1>
            <ul>
              {snacks.length > 0 &&
                snacks.map((food) => <li key={food.id}>{food.name}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodaysTake;
