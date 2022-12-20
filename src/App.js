import "./App.css";
import Tile from "./Tile";

function App() {
  const eloMelo = "fiufiu";
  const link = "https://www.youtube.com/";

  return (
    <div className="App">
      <div className="component">
        <h1>hello {eloMelo}</h1>
        <a href={link}>YT</a>
        <p>{`coś`}</p>
        <p>{7}</p>
        <p>{[1, 2, 3, 4, 5, 6, 7]}</p>
        <p>{Math.random() * 10}</p>
      </div>

      <Tile />
    </div>
  );
}

export default App;
