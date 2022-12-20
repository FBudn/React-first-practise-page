import "./App.css";
import Tile from "./Tile";

function App() {
  return (
    <div className="App bg-blue-400 min-h-screen min-w-full">
      <div className="flex w-full flex-col justify-center align-center items-center max-w-7xl">
        <Tile />
      </div>
    </div>
  );
}

export default App;

/*   
const eloMelo = "fiufiu";
  const link = "https://www.youtube.com/";
<div className="component">
        <h1>hello {eloMelo}</h1>
        <a href={link}>YT</a>
        <p>{`coś`}</p>
        <p>{7}</p>
        <p>{[1, 2, 3, 4, 5, 6, 7]}</p>
        <p>{Math.random() * 10}</p>
      </div>  
      
      <a
  href="#"
  style={{
    color: "white",
    backgroundColor: "green",
  }}
></a>;
      
      
      
      */
