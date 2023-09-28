import CartWidget from "../../common/cartWidget/CartWidget"


const Navbar = () => {
  return (
    <div>
        <h4>FitSport Shop</h4>
        <ul>
            <li>Todos los productos</li>
            <li>Snacks proteinicos</li>
            <li>Accesorios deportivos</li>
            <li>Suplementos</li>
        </ul>
    <CartWidget/>
    </div>
  )
}

export default Navbar