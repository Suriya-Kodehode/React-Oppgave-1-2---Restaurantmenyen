import './Dish.css';

export default function Dish ({pris, ingredienser, kategori}) {
    return (
        <div>
            <p><span>Pris</span>: {pris}</p>
            <p><span>Ingredienser</span>:<br/> {ingredienser}</p>
            <p><span>Kategori</span>:<br/> {kategori}</p>
        </div>
    )
}
