
import Navbar from "./components/layout/navbar/Navbar"

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"



function App() {
  
  let saludo = "¡Bienvenido a FitSport Shop!"

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting = {'bienvenidos'}/>
    </div>
  )
}

export default App
