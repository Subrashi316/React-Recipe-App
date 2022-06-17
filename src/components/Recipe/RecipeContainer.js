import classes from './RecipeContainer.module.css';

const RecipeContainer = (props)=>{

    return (
        <div className={classes.recipeContiner}>
            {props.children}
        </div>
    )
}

export default RecipeContainer;