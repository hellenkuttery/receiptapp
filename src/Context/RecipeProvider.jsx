// https://developer.edamam.com/admin/access_details
// Application ID
// 58c5091b
// Application Keys
// 9ced208298cb1fd453c44d6655f88efb	—
//https://developer.edamam.com/edamam-docs-recipe-api-v1

import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();
const APP_ID = "58c5091b";
const APP_KEY = "9ced208298cb1fd453c44d6655f88efb";

const RecipeProvider = ({ children }) => {
  /* -------------------------------------------------------------------------- */
  // Login için gerekli usernam ve password localstoragedan getirme
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );
  /* -------------------------------------------------------------------------- */
  // Veri çekip Hom, Header ve Recipecardda gerekli olan veriler
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    
    const { data } = await axios.get(url);
    setRecipes(data.hits);
    console.log(recipes);
  };



  return (
    <RecipeContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        recipes,
        setRecipes,
        query,
        setQuery,
        mealType,
        setMealType,
        getData
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
