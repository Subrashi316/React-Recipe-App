import classes from "./IngredientItem.module.css";

const IngredientItem = (props) => {
  return (
    <li className={classes.ingredientItem}>
      {`${props.quantity === null ? '' : props.quantity} ${props.unit} ${props.description}`}
    </li>
  );
};

export default IngredientItem;
