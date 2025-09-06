<<<<<<< HEAD
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Ingredient } from '../types/types';
import { recipes } from '../data/recipes';

const WorkAreaContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
`;

const PrepStation = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const AssemblyArea = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  min-height: 300px;
`;

const IngredientItem = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  text-align: center;
  cursor: move;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.05);
  }
  
  .emoji {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

interface GameWorkAreaProps {
  onOrderComplete: (ingredients: Ingredient[]) => void;
}

export const GameWorkArea = ({ onOrderComplete }: GameWorkAreaProps) => {
  // Get all unique ingredients from recipes
  const allIngredients = Array.from(
    new Set(
      recipes.flatMap(recipe => recipe.ingredients)
        .map(ing => JSON.stringify(ing))
    )
  ).map(str => JSON.parse(str));

  const handleDragEnd = (_result: any) => {
    // TODO: Implement drag and drop logic
    // This is a placeholder for now
    onOrderComplete([]);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <WorkAreaContainer>
        <h2>Prep Station</h2>
        <PrepStation>
          {allIngredients.map((ingredient) => (
            <Draggable key={ingredient.id} draggableId={ingredient.id} index={0}>
              {(provided) => (
                <IngredientItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="emoji">{ingredient.image}</div>
                  <div>{ingredient.name}</div>
                </IngredientItem>
              )}
            </Draggable>
          ))}
        </PrepStation>

        <h2>Assembly Area</h2>
        <Droppable droppableId="assembly-area">
          {(provided) => (
            <AssemblyArea
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </AssemblyArea>
          )}
        </Droppable>
      </WorkAreaContainer>
    </DragDropContext>
  );
};
=======
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Ingredient } from '../types/types';
import { recipes } from '../data/recipes';

const WorkAreaContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
`;

const PrepStation = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const AssemblyArea = styled.div`
  flex: 1;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  min-height: 300px;
`;

const IngredientItem = styled.div`
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  text-align: center;
  cursor: move;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.05);
  }
  
  .emoji {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

interface GameWorkAreaProps {
  onOrderComplete: (ingredients: Ingredient[]) => void;
}

export const GameWorkArea = ({ onOrderComplete }: GameWorkAreaProps) => {
  // Get all unique ingredients from recipes
  const allIngredients = Array.from(
    new Set(
      recipes.flatMap(recipe => recipe.ingredients)
        .map(ing => JSON.stringify(ing))
    )
  ).map(str => JSON.parse(str));

  const handleDragEnd = (result: any) => {
    // Handle drag and drop logic here
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <WorkAreaContainer>
        <h2>Prep Station</h2>
        <PrepStation>
          {allIngredients.map((ingredient) => (
            <Draggable key={ingredient.id} draggableId={ingredient.id} index={0}>
              {(provided) => (
                <IngredientItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="emoji">{ingredient.image}</div>
                  <div>{ingredient.name}</div>
                </IngredientItem>
              )}
            </Draggable>
          ))}
        </PrepStation>

        <h2>Assembly Area</h2>
        <Droppable droppableId="assembly-area">
          {(provided) => (
            <AssemblyArea
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </AssemblyArea>
          )}
        </Droppable>
      </WorkAreaContainer>
    </DragDropContext>
  );
};
>>>>>>> e507c67116ac7f1f06dd0e198964ada230c859e6
