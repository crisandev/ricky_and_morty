import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";

function App() {
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "email@gmail.com";
   const PASSWORD = "pass123";
   useEffect(() => {
      !access && navigate("/");
   }, [access]);

   function login({ email, password }) {
      if (EMAIL === email && PASSWORD === password) {
         setAccess(true);
         navigate("/home");
      }
   }

   function logout(){
      setAccess(false);
   }

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
         {useLocation().pathname !== "/" ? <Navbar onSearch={onSearch} logout={logout} /> : null}
         {/* {useLocation().pathname !== "/" && <Navbar onSearch={onSearch} />} */}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;
