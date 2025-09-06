import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RecipeBook } from './components/RecipeBook';
import { GameWorkArea } from './components/GameWorkArea';
import { CustomerOrder } from './components/CustomerOrder';
import { Login } from './components/Login';
import { recipes } from './data/recipes';
import { CustomerOrder as CustomerOrderType, GameState, Ingredient } from './types/types';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Scoreboard = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 0 0 8px 8px;
  z-index: 1000;
`;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    currentOrder: null,
    timeRemaining: 0,
    isGameOver: false,
  });

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const generateOrder = (): CustomerOrderType => {
    const baseRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    const ingredients = baseRecipe.ingredients.map(i => i.name);
    
    // Generate random modifications
    const modifications = {
      remove: ingredients.length > 2 
        ? [ingredients[Math.floor(Math.random() * ingredients.length)]]
        : [],
      add: Math.random() > 0.5 
        ? ['Extra ' + ingredients[Math.floor(Math.random() * ingredients.length)]]
        : [],
    };

    return {
      id: Date.now().toString(),
      baseRecipe,
      modifications,
      timeLimit: 60 - Math.min(gameState.score / 10, 30), // Decreases with score
    };
  };

  useEffect(() => {
    if (!gameState.currentOrder && !gameState.isGameOver) {
      setGameState(prev => ({
        ...prev,
        currentOrder: generateOrder(),
        timeRemaining: 60,
      }));
    }

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.currentOrder && prev.timeRemaining > 0) {
          return {
            ...prev,
            timeRemaining: prev.timeRemaining - 1,
          };
        } else if (prev.timeRemaining <= 0 && !prev.isGameOver) {
          return {
            ...prev,
            isGameOver: true,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.currentOrder, gameState.isGameOver]);

  const handleOrderComplete = (_ingredients: Ingredient[]) => {
    if (!gameState.currentOrder) return;

    // TODO: Implement order validation logic here
    const isCorrect = true; // Placeholder

    if (isCorrect) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + 10,
        currentOrder: null,
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        isGameOver: true,
      }));
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  if (gameState.isGameOver) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Game Over!</h1>
        <h2>Final Score: {gameState.score}</h2>
        <button onClick={() => window.location.reload()}>Play Again</button>
      </div>
    );
  }

  return (
    <>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2000 }}>
        <button
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            setIsAuthenticated(false);
          }}
          style={{
            padding: '0.5rem 1rem',
            background: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      <Scoreboard>Score: {gameState.score}</Scoreboard>
      <AppContainer>
        <RecipeBook />
        <GameWorkArea onOrderComplete={handleOrderComplete} />
        {gameState.currentOrder && (
          <CustomerOrder
            order={gameState.currentOrder}
            timeProgress={(gameState.timeRemaining / gameState.currentOrder.timeLimit) * 100}
          />
        )}
      </AppContainer>
    </>
  );
}

export default App;
