import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Navbar.module.css";

export default function Navbar(props) {
   return (
      <div className={styles.navbar}>
         <header>
            <nav>
               <h3><span>Rick</span> and Morty</h3>
               <SearchBar onSearch={(characterID) => window.alert(characterID)} />
            </nav>
         </header>
      </div>
   );
}
