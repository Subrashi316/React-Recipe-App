import classes from './Header.module.css';
import {useRef} from 'react';
import MagnifyingGlassSvg from '../../images/magnifying-glass.svg';

const Header = (props)=>{
    const ref = useRef();
    
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const data = ref.current.value;
        props.onSearch(data);
    }

    return (
        <header className={classes.header}>
        <h1>Recipes App</h1>
            <form onSubmit={onSubmitHandler} className={classes.form}>
                <input type="text" name="search" ref={ref} placeholder="Search a recipe eg:pizza" />
                <button> <img src={MagnifyingGlassSvg} className={classes.img} alt='a search button'/></button>
            </form>
        </header>
    )
}

export default Header;