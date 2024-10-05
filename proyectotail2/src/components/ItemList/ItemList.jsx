import Items from "../Item/Items"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"

export default function ItemList(){
    const [products, setProducts] = useState([]);

    useEffect (() => {
        getProducts().then((data) =>{
            setProducts(data);
        });
    }, []);

    return(
        <div className="flex flex-wrap">
            {products.map((prod) =>(
                <Items {...prod} key={prod.id}/> 
            ))}
        </div>
    )
}