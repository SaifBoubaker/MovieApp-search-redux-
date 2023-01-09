import "./App.css";
import MovieList from "./Components/MovieList";
import { useSelector } from "react-redux";
import Add from "./Components/Add";
import Search from "./Components/Search";

function App() {
  const { movies } = useSelector((state) => state.movie);
  return (
    <div className="App">
      <Search />
      <br />
      <Add />
      <MovieList data={movies} />
    </div>
  );
}

export default App;
