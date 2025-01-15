import styles from './Style/Restaurant.module.css';

export default function Dish ({pris, ingredienser, kategori}) {
    return (
        <div>
            <p id={styles.price}><label>Pris</label>: {pris}</p>
            <p><label id={styles.igd}>Ingredienser:</label><br/> {ingredienser}</p>
        </div>
    )
}
