import React, { useContext } from "react";
import { RecipeContext } from "../../Context/RecipeProvider";
import { Cards, MainContainer,RecipeHeader,RecipeImage,RecipeButton} from "./HomeStyle";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const { recipes } = useContext(RecipeContext);
  const navigate=useNavigate()
  return (
    <MainContainer>
      {recipes.map(({recipe},index) => (
        <Cards key={index}>
            <RecipeHeader>{recipe.label}</RecipeHeader>
            <RecipeImage src={recipe.image}/>
            <RecipeButton onClick={()=> navigate("/details", {state:{recipe}})}>Details</RecipeButton>
            {/* Eğer details/id ile gönderilseydi */}
            {/* <RecipeButton onClick={() => navigate(`/details/${recipe.id}`)}>Details</RecipeButton> */}

        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
