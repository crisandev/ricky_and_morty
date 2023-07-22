import { useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";

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
      <div>
         {useLocation().pathname !== "/" ? <Navbar onSearch={onSearch} /> : null}
         <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
