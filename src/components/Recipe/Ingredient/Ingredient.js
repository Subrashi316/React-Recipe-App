import IngredientItem from "./IngredientItem";
import classes from "./Ingredient.module.css";
import { Fragment } from "react";
const Ingredient = (props) => {
  return (
    <Fragment>
      <div className={classes.box}>
        <h2 className={classes.heading}>Ingredients</h2>
        <ul className={classes.ingredient}>
          {
            props.ingredients.map((val,index) => {
              return <IngredientItem quantity={val.quantity} unit={val.unit} description={val.description} key={index} />
            })
          }
        </ul>
      </div>
    </Fragment>
  );
};

export default Ingredient;
