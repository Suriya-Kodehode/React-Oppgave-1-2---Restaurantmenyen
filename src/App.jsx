
import './App.css'

import Menu from './Restaurantmenyen/Menu.jsx';


function App() {
  
  const meny = [
    {
      id: 1,
      tittel: "Spaghetti Bolognese",
      pris: "159 kr",
      ingredienser: "Spaghetti, kjøttsaus, parmesan",
      kategori: "Hovedrett",
    },
    {
      id: 2,
      tittel: "Kremet Kyllingsuppe",
      pris: "129 kr",
      ingredienser: "Kylling, fløte, gulrøtter, selleri",
      kategori: "Forrett",
    },
    {
      id: 3,
      tittel: "Margarita Pizza",
      pris: "169 kr",
      ingredienser: "Tomatsaus, mozzarella, basilikum",
      kategori: "Hovedrett",
    },
    {
      id: 4,
      tittel: "Sushi Mix",
      pris: "229 kr",
      ingredienser: "Laks, tunfisk, reker, ris",
      kategori: "Hovedrett",
    },
    {
      id: 5,
      tittel: "Cæsarsalat",
      pris: "139 kr",
      ingredienser: "Romanosalat, kylling, parmesan, dressing",
      kategori: "Forrett",
    },
    {
      id: 6,
      tittel: "Brownie med Is",
      pris: "89 kr",
      ingredienser: "Brownie, vaniljeis, sjokoladesaus",
      kategori: "Dessert",
    },
    {
      id: 7,
      tittel: "Taco Tallerken",
      pris: "199 kr",
      ingredienser: "Kjøttdeig, mais, ost, guacamole",
      kategori: "Hovedrett",
    },
    {
      id: 8,
      tittel: "Pannekaker med Syltetøy",
      pris: "99 kr",
      ingredienser: "Pannekaker, jordbærsyltetøy, sukker",
      kategori: "Dessert",
    },
    {
      id: 9,
      tittel: "Reker med Sitron",
      pris: "149 kr",
      ingredienser: "Reker, sitron, dill, brød",
      kategori: "Forrett",
    },
    {
      id: 10,
      tittel: "Entrecôte med Grønnsaker",
      pris: "289 kr",
      ingredienser: "Entrecôte, asparges, poteter, peppersaus",
      kategori: "Hovedrett",
    },
  ];

  const menuCategory = meny.reduce((acc, dish) => {
    if (!acc[dish.kategori]) {
      acc[dish.kategori] = []
    }
    acc[dish.kategori].push(dish)
    return acc
  }, {});


  return (
    <div className='container'>
      <h1 id='restaurantmeny'>Restaurantmeny</h1>
      {Object.keys(menuCategory).map(kategori => (
        <div key={kategori} className={`category-${kategori.replace(/\s/g, '').toLowerCase()}`}>
          <h2>{kategori}</h2>
          <div className='menu-name'>
            {menuCategory[kategori].map(listMeny => {
              return (
                <Menu key={listMeny.id} data={listMeny}/>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
