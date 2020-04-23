import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,url,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            
            <div className={style.recipeimage}>
            <img src={image} alt="" />
            </div>
            <div className={style.recipetitle}>
            <h2>{title}</h2>
            </div>
            <ol>
                {ingredients.map((ingredient,index) =>
                <li key={index}>{ingredient.text}</li>    
                )}
            </ol>
            <div className={style.recipeurl}>
             <a href={url} target="blank">~Watch-Now</a>
            </div>
        </div>
    );
};

export default Recipe;