import React, { useContext } from "react";
import {

  MainContainer,
  RecipeHeader,
  RecipeImage,
  RecipeButton,
  
} from "./HomeStyle";

import Header from './../../Components/Header/Header';
import RecipeProvider, { RecipeContext } from "../../Context/RecipeProvider";
import cooker from "../../assets/home.svg"
import RecipeCard from "./RecipeCard";


const Home = () => {
  const {recipes}=useContext(RecipeContext)
  console.log(recipes)
  return (
    <div>

  <Header/>

  {recipes.length>0 ? <RecipeCard/>: <img src={cooker}/>}

    </div>
  );
};

export default Home;
