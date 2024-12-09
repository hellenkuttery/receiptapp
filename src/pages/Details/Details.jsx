import React, { useContext } from "react";
import { RecipeContext } from "../../Context/RecipeProvider";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  HeaderContainer,
  DetailPart,
  ImgContainer,
  IngredContainer,
  OtherPart
} from "./DetailsStyle";
import diet from "../../assets/diet.svg";
const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  console.log(recipe);

  return (
    <DetailContainer>
      <HeaderContainer>
        <h4>{recipe.label}</h4>
        <img src={diet} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
        <>NUTRIENTS</>
          <span>
            {recipe.totalNutrients.CA.label}:
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOCDF.label}:
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </span>
          <span>
            {" "}
            {recipe.totalNutrients.CHOLE.label}:
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </span>
          <span>
            {" "}
            {recipe.totalNutrients.ENERC_KCAL.label}:
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </span>
          <span>{recipe.totalWeight} </span>

          <span>Calories: {Math.round(recipe.calories)}</span>

          <span>
            {recipe.digest.slice(0, 4).map((item, index) => (
              <p key={index}>
                {item.label}: {Math.round(item.total)} {item.unit}
              </p>
            ))}
          </span>
        </OtherPart>
      </DetailPart>
      <ImgContainer>
      <img src={recipe.image} alt="" />
      </ImgContainer>
      <IngredContainer>
        {recipe.ingredientLines.map((ingredient,index)=>(
          <div key={index}>
            <p>{index+1} * {ingredient} </p>
          </div>
        ))}
      </IngredContainer>
    </DetailContainer>
  );
};

export default Details;
