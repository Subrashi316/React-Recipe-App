import SearchItem from "./SearchItem";
import classes from "./SearchContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchAction } from "../../store/index";
import Spinner from "../UI/Spinner";

const SearchContainer = (props) => {
  const page = useSelector((state) => state.search.currentPage);
  const results = useSelector((state) => state.search.resultsCount);
  const {error,status} = props.searchState;

  const start = 10 * page - 10;
  const end = 10 * page;
  const dispatch = useDispatch();

  const nextPageHandler = () => {
    dispatch(searchAction.increasePage());
  };

  const prevPageHandler = () => {
    dispatch(searchAction.decreasePage());
  };

  const resultsList = (
    <ul>
      {props.list.slice(start, end).map((val) => {
        return (
          <SearchItem
            id={val.id}
            key={val.id}
            publisher={val.publisher}
            img={val["image_url"]}
            title={val.title}
          />
        );
      })}
      {
        props.list.length === 0 && <h1 className={`${classes.welcome} ${classes['bg-transparent']}`}>No recipes found 🙁</h1>
      }
    </ul>
  );

  const controls = (
    <div className={classes.pageControls}>
      {!(page === 1) && (
        <button className={classes.left} onClick={prevPageHandler}>
          &larr; Page {page - 1}{" "}
        </button>
      )}
      {props.list.length !== 0 && !(page === Math.ceil(results / 10)) && (
        <button className={classes.right} onClick={nextPageHandler}>
          Page {page + 1} &rarr;
        </button>
      )}
    </div>
  );

  return (
    <div className={classes.searchContainer}>
      {!error && status === "completed" && resultsList}
      {!error && status === "pending" && <Spinner />}
      {controls}
      {error && status === 'completed' && <h2 className={classes.error}>{error}</h2>}
      {!error && !status && <h2 className={classes.welcome}> Welcome</h2>}
    </div>
  );
};

export default SearchContainer;
