import Ingredient from "./Ingredient/Ingredient";
import classes from "./Recipe.module.css";
import { useParams } from "react-router";
import { useEffect,useState } from "react";
import {URL,KEY} from '../../helper/config';
import Spinner from '../UI/Spinner';
import useError from "../../hooks/Error";

const Recipe = () => {
  const {id} = useParams();
  const [recipeState,setRecipeState] = useState(null);  
  const {State,Dispatch} = useError();

  const {status,error} = State;

  useEffect(()=>{
    Dispatch({type:'PENDING'});
    const fetchData = async ()=>{
      try{
        const response = await fetch(`${URL}${id}?key=${KEY}`);
        if(!response.ok) throw new Error('Something went wrong')
        const data = await response.json();
        const {data:{recipe}} = data;
        Dispatch({type:'COMPLETED'});
        setRecipeState(recipe);
      }
      catch (err){
        console.log(err);
        Dispatch({type:'ERROR'});
      }
    }

    fetchData();

  },[id,Dispatch])  


  if(status === 'pending'){
    return (
      <Spinner />
    )
  }

  if(error){
    return (
      <div>{error}</div>
    )
  }

  if(status === null) return;

  return (
    <div>
      <div className={classes["recipe_header"]} id={id}>
        <img
          src={recipeState['image_url']}
          alt={`${recipeState.title}`}
          className={classes.fig}
        />
        <h2 className={classes.title}>
          <span>{recipeState.title} </span>
        </h2>
      </div>
      <div className={classes.ingredients}>
        <Ingredient ingredients={recipeState.ingredients}/>
      </div>
      <div className={classes["info-container"]}>
        <div className={classes.footer}>
          <h2>How to Cook It</h2>
          <p>
            This recipe was carefully designed and tested by {recipeState.publisher}.
            Please check out directions at their website.
          </p>
          <a href={recipeState['source_url']}>
          Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
