import React from 'react';
import './components/style.css';
import Meal from './components/Meal';
import Recipe from './components/Recipe';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
