export const GameWorkArea = ({ onOrderComplete }: GameWorkAreaProps) => {
  const allIngredients = Array.from(
    new Set(
      recipes.flatMap(recipe => recipe.ingredients)
        .map(ing => JSON.stringify(ing))
    )
  ).map(str => JSON.parse(str));

  const handleDragEnd = (result: any) => {
    // Read result to prevent TS error, implement your logic here
    const { source, destination, draggableId } = result;
    // TODO: Implement drag-and-drop logic, e.g., move ingredients between areas

    // Example: If you detect a valid drop and want to complete an order:
    // onOrderComplete(currentIngredients);
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
