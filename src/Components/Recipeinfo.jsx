import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipeinfo= () => {
    const [item, setItem] = useState(null);
    const { MealId } = useParams();

    useEffect(()=>{
        if (MealId !== "") {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data.meals[0]);
                })
                .catch(error => {
                    console.error("Error fetching recipe:", error);
                });
        }
    }, [MealId]);

    return (
        <>
        {
            (!item)?"":(<>
                <div className="content">
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <div className="inner-content">
                        <h1>{item.strMeal}</h1>
                        <h2>{item.strArea} Food</h2>
                        <h3>Category{item.strCategory} Food</h3>
                    </div>
                </div>
                <div className="recipe-details">
                    <div className="ingredient">
                        <h2>ingredients</h2><br />
                        <h4>{item.strIngredient1} :{item.strMeasure1}</h4>
                        <h4>{item.strIngredient2} :{item.strMeasure2}</h4>
                        <h4>{item.strIngredient3} :{item.strMeasure3}</h4>
                        <h4>{item.strIngredient4} :{item.strMeasure4}</h4>
                        <h4>{item.strIngredient5} :{item.strMeasure5}</h4>
                        <h4>{item.strIngredient6} :{item.strMeasure6}</h4>
                        <h4>{item.strIngredient7} :{item.strMeasure7}</h4>
                        <h4>{item.strIngredient8} :{item.strMeasure8}</h4>
                    </div>
                    <div className="intructions">
                        <h2>instructions</h2><br />
                        <h4>{item.strInstructions}</h4>
                    </div>
                    <div className="video">
                        <iframe src={`https://www.youtube.com/embed/6R8ffRRJcrg`}>

                        </iframe>
                    </div>
                </div>
                </>)
            
            }
        </>
    );
}

export default Recipeinfo;