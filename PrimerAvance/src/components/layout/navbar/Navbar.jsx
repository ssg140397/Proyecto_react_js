import CartWidget from "../../common/cartWidget/CartWidget"


const Navbar = () => {
  return (
    <div>
        <h4>Logo</h4>
        <ul>
            <li>Todos los productos</li>
            <li>Snacks</li>
            <li>Accesorios</li>
            <li>Suplementos</li>
        </ul>
    <CartWidget/>
    </div>
  )
}

export default Navbar