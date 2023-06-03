import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
    const [search, setSearch] = useState("");
    const [show, setShow] = useState(false);
    const [item, setItem] = useState([]);
    const [url, setUrl] = useState(
        "https: /www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setItem(data.meals);
          setShow(true);
        });
    }, [url]); // No need to pass `url` as dependency
  
    const searchRecipe = (e) => {
      if (e.keyCode === 13) {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      }
    };
  
    const setIndex = (alpha) => {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    };
  
    return (
      <>
        <div className="main">
          <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <h4>
            "A culinary delight awaits, where flavors come alive!"
            </h4>
          </div>
          <div className="searchBox">
            <input
              type="search"
              className="search-bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchRecipe}
            />
          </div>
          <div className="container">
            {show ? <MealItem data={item} /> : "Not Found"}
          </div>
          <div className="indexContainer">
            <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
          </div>
        </div>
      </>
    );
  };
  export default Meal;
  