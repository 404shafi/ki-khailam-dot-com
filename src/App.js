import { Route, Routes } from "react-router-dom";
import "./App.css";
import Eat from "./components/Eat/Eat";
import Header from "./components/Header/Header";
import TodaysTake from "./components/TodaysTake/TodaysTake";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Overview from "./components/Overview/Overview";
import { createContext, useState } from "react";

export const EatenFoodsContext = createContext("");

function App() {
  const [eatenItems, setEatenItems] = useState([]);
  const [mealType, setMealType] = useState("Breakfast");
  const handleMealType = (e) => {
    setMealType(e.target.value);
  };
  const addItemToEatenList = (food, mealType) => {
    const addedFood = { ...food, mealType };
    const newFood = [...eatenItems, addedFood];
    setEatenItems(newFood);
  };
  return (
    <EatenFoodsContext.Provider value={eatenItems}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/todaystake"
            element={<TodaysTake mealType={mealType}></TodaysTake>}
          ></Route>
          <Route
            path="/overview"
            element={<Overview eatenItems={eatenItems}></Overview>}
          ></Route>
          <Route
            path="/eat"
            element={
              <Eat
                addItemToEatenList={addItemToEatenList}
                handleMealType={handleMealType}
                mealType={mealType}
              ></Eat>
            }
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </EatenFoodsContext.Provider>
  );
}

export default App;
