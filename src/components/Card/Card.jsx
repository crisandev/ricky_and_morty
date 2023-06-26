import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.card}>
         <button className={styles.btnDelete} onClick={props.onClose} id={props.id}>X</button>
         <img src={props.image} alt={props.name} />
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
      </div>
   );
}
