import { useState } from "react";
// import styles from "./SearchBar.module.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (e) => {
      setId(e.target.value);
   }

   return (
      <div >
         <input type='search' value={id} onChange={handleChange} />
         <button onClick={onSearch} id={id}>Agregar</button>
      </div>
   );
}
