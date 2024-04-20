import React from 'react';
import Meal from './Components/Meal';
import Style from './Components/style.css';
import Mealitem from './Components/Mealitem.jsx';
import RecipeIndex from './Components/RecipeIndex.jsx';
import Recipeinfo from './Components/Recipeinfo.jsx';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <> 
    <Routes>
    <Route path="/" element= {<Meal/>}/> 
    <Route path="/:MealId" element={<Recipeinfo/>}/>
    </Routes>

       
    
    </>
    
  );
}

export default App;

