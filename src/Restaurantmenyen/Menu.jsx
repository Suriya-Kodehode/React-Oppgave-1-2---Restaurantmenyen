import './Menu.css';

import Dish from './Dish.jsx'

export default function Menu ({data}) {

    const { tittel, pris, ingredienser, kategori } = data;

    return (
        <div className='menu-items'>
            <h3>{tittel}</h3>
            <Dish pris={pris} ingredienser={ingredienser} kategori={kategori}/>
        </div>
    )
}