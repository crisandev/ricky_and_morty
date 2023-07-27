import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar({ onSearch, logout }) {



   return (
      <div className={styles.navbar}>
         <header>
            <nav>
               <h3>
                  <span>Rick</span> and Morty
               </h3>
               <NavLink to="/home">
                  <button>Home</button>
               </NavLink>
               <NavLink to="/about">
                  <button>About</button>
               </NavLink>
                  <button onClick={logout}>Logout</button>
               <SearchBar onSearch={onSearch} />
            </nav>
         </header>
      </div>
   );
}
