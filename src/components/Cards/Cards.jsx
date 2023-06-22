import Card from "../Card/Card";
import styles  from "./Cards.module.css";

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.cardsContainer}>
         {characters.map((c, i) => {
            return (
               <Card
                  onClose={c.onClose}
                  name={c.name}
                  status={c.status}
                  species={c.species}
                  gender={c.gender}
                  origin={c.origin.name}
                  image={c.image}
                  key={i}
               />
            );
         })}
      </div>
   );
}
