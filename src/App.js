import "./App.css";
import Header from "./components/Header/Header";
import { Fragment } from "react";
import SearchContainer from "./components/Search/SearchContainer";
import RecipeContainer from "./components/Recipe/RecipeContainer";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "./store/index";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./components/Recipe/Recipe";
import { URL, KEY } from "./helper/config";
import Responsive from "react-responsive";
import useError from "./hooks/Error";

function App() {
  const dispatch = useDispatch();
  const searchList = useSelector((state) => state.search.searchResults);
  const { State, Dispatch } = useError();

  const searchHandler = async (val) => {
    try {
      Dispatch({ type: "PENDING" });
      const response = await fetch(`${URL}?search=${val}&key=${KEY}`);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();

      dispatch(
        searchAction.setSearchResults({
          list: data.data.recipes,
          resultsCount: data.results,
        })
      );
      Dispatch({ type: "COMPLETED" });
    } catch (err) {
      Dispatch({ type: "ERROR", error: err.message });
    }
  };

  return (
    <Fragment>
      <div className="top">
        <Header onSearch={searchHandler} />
        <main className="main">
          <Responsive minWidth="1000px">
            <SearchContainer list={searchList} searchState={State} />

            <RecipeContainer>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/recipe/:id" element={<Recipe />} />
              </Routes>
            </RecipeContainer>
          </Responsive>

          <Responsive maxWidth="1000px">
            <Routes>
              <Route
                path="/"
                element={
                  <SearchContainer list={searchList} searchState={State} />
                }
              />

              <Route
                path="/recipe/:id"
                element={
                  <RecipeContainer>
                    <Recipe />
                  </RecipeContainer>
                }
              />
            </Routes>
          </Responsive>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
