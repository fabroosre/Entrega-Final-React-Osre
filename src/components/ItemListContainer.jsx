import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {

    const [vehiculos, setvehiculos] = useState([]);

    const [titulo, setTitulo] = useState("vehiculos");

    const categoria = useParams().categoria;

    useEffect(() => {

      const vehiculosRef = collection(db, "vehiculos");
      const q = categoria ? query(vehiculosRef, where("categoria", "==", categoria)) : vehiculosRef;

      getDocs(q)
        .then((resp) => {

          setvehiculos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          )
        })
        
    }, [categoria])
    
    
  return (
    <div>
        <ItemList vehiculos={vehiculos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer