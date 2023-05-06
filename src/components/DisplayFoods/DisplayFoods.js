import React from "react";

const DisplayFoods = (props) => {
  const { foods, addItemToEatenList, mealType } = props;
  return (
    <div className="mt-5 container">
      <h1>Choose your dish from following items</h1>
      <div>
        {foods.map((food) => (
          <div
            key={food.id}
            className="d-flex justify-content-between my-2 border border-1 border-info "
          >
            <p>{food.name}</p>
            <button onClick={() => addItemToEatenList(food, mealType)}>
              Add To Today's Menu
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFoods;
