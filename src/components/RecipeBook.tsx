import styled from 'styled-components';
import { recipes } from '../data/recipes';

const RecipeBookContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: auto;
  border-right: 1px solid #ddd;
`;

const RecipeCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 10px 0;
    color: #333;
  }
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin: 5px 0;

    span {
      margin-right: 8px;
    }
  }
`;

export const RecipeBook = () => {
  return (
    <RecipeBookContainer>
      <h2>Recipe Book</h2>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id}>
          <h3>{recipe.name}</h3>
          <IngredientsList>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id}>
                <span>{ingredient.image}</span>
                {ingredient.name}
              </li>
            ))}
          </IngredientsList>
        </RecipeCard>
      ))}
    </RecipeBookContainer>
  );
};
