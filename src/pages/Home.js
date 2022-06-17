import CookingLogo from "../images/cooking_lady.svg";
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.container}>
      <img src={CookingLogo} alt="A lady cooking" className={classes.img} />
      <h3 className={classes.heading}>Search Some Tasty Recipes Now</h3>
    </div>
  );
};

export default Home;
