import React from "react";
import AnimatedExample from "../AnimatedExample/MyAnimatedExample";

const Overview = ({ eatenItems }) => {
  const items = [];
  for (let item of eatenItems) {
    items.push(item.name);
  }
  const itemsWithQuantity = [];
  const isItemIncluded = function (itemName) {
    for (let prop of itemsWithQuantity) {
      if (prop.name === itemName) {
        return true;
      }
    }
    return false;
  };
  for (let item of items) {
    if (!isItemIncluded(item)) {
      const id = itemsWithQuantity.length + 1;
      const quantity = 1;
      const name = item;
      const obj = { id, name, quantity };
      itemsWithQuantity.push(obj);
    } else {
      for (let prop of itemsWithQuantity) {
        if (prop.name === item) {
          const q = prop.quantity + 1;
          prop.quantity = q;
        }
      }
    }
  }
  console.log(items);
  console.log(itemsWithQuantity);
  return (
    <div>
      <h1>
        {eatenItems.length === 0 &&
          "Feed Your Stomach to know what you have eaten so far !!!!!!!!!!!!"}
      </h1>
      <ul>
        {itemsWithQuantity
          .sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .map((item) => (
            <li>
              {item.name}: <AnimatedExample item={item}></AnimatedExample>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Overview;
