import { useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
// import characters from "./data.js";

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      id = id.target.id;
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert("¡No hay personajes con este ID!");
         }
      });
   }

   function onClose(id) {
      id = id.target.id;
      const newCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(newCharacters);
   }

   return (
      <div className="App">
         <Navbar onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
