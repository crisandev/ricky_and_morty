import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Navbar.module.css";

export default function Navbar({onSearch}) {
   return (
      <div className={styles.navbar}>
         <header>
            <nav>
               <h3><span>Rick</span> and Morty</h3>
               <SearchBar onSearch={onSearch} />
            </nav>
         </header>
      </div>
   );
}
