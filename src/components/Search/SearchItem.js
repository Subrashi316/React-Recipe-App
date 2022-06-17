import classes from "./SearchItem.module.css";
import {Link} from 'react-router-dom';

const SearchItem = (props) => {
  return (
    <li >
    <Link   className={classes.searchItem} to={`/recipe/${props.id}`}>
    <figure>
      <img src={props.img} alt={props.title} />
      </figure>
      <div>
        <h3>{props.title}</h3>
        <p>{props.publisher}</p>
      </div>
      </Link>
    </li>
  );
};

export default SearchItem;
