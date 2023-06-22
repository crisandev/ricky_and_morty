import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import characters from "./data.js";

function App() {
   return (
      <div className="App">
         <Navbar />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
