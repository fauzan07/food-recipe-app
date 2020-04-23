import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Recipe from './Recipe';
import logo from './logo.png'
import './App.css';

const App = () => {

  const api_id = '08fb5e0a';
  const api_key = 'dd34b3556552ba02f5128421d6d8d34c';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = () => {      
  Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`)
  .then((response) => {
  console.log(response.data.hits);
    setRecipes(response.data.hits)
  })
  .catch(error => {console.log(error)});
  }

  const updateSearch = event => {
    setSearch(event.target.value);
    // console.log(search);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  
  return(
    <div className="App">
      <div className="heading">
      <img className="logo" src={logo} alt="" />
      {/* <h1>Food Recipe App</h1> */}
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="search Recipes..." value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
     
        image={recipe.recipe.image}
        title={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  );
};
export default App;
