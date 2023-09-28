
import Navbar from "./components/layout/navbar/Navbar"

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"



function App() {
  
  let saludo = "Bienvenido a "

  return (
    <div>
      <Navbar />
      <ItemListContainer/>
    </div>
  )
}

export default App
