import Item from "./Item";
import { toCapital } from "../helpers/toCapital";


const ItemList = ( {vehiculos, titulo} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{toCapital(titulo)}</h2>

        <div className="vehiculos">
            { vehiculos.map((vehic) => <Item vehiculo={vehic} key={vehic.id} />) }
        </div>
    </div>
  )
}

export default ItemList