import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Deatil(props) {
   const { id } = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert("No hay personajes con ese ID");
         }
      });
      return setCharacter({});
   }, [id]);

   return (
      <div>
         <h2>DETAILS</h2>
         <h3>{character.name}</h3>
         <h3>{character.status}</h3>
         <h3>{character.species}</h3>
         <h3>{character.gender}</h3>
         <h3>{character.origin?.name}</h3>
         <img src={character.image} alt={character.name} />
      </div>
   );
}
