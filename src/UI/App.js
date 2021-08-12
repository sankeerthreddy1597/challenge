import React, { useState } from "react";
import "./App.css";
import Table from "./Components/Table/Table";

const App = () => {
  const items = [
    "carrot",
    "apple",
    "grapes",
    "cake",
    "crackers",
    "chips",
    "tv",
    "ham",
    "beef",
  ];
  const [currItem, setCurrItem] = useState("item");

  return (
    <div className="App">
      <div className="app__container">
        {/* //User Table */}
        <h1 className="app__heading">All Users</h1>
        <p className="app__subtitle">username and age</p>
        <Table col1="username" col2="age" item={currItem} />

        {/* //DropDown Menu */}
        <h1 className="app__heading">
          Age Demographic of Users with{" "}
          {currItem !== "item" ? `: ${currItem}` : `______`}
        </h1>
        <div className="app__dropdownContainer">
          <label htmlFor="items">Choose an Item:</label>
          <select
            name="items"
            id="items"
            className="app__dropdown"
            value={currItem}
            onChange={(e) => setCurrItem(e.target.value)}
          >
            <option value="item">Item</option>
            {items.map((item, index) => {
              return (
                <option key={item + index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        {/* Age Count Table */}
        {currItem !== "item" && (
          <Table col1="age" col2="count" item={currItem} />
        )}
      </div>
    </div>
  );
};

export default App;
