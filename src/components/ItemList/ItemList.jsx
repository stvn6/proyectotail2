import Items from "../Item/Items"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading.jsx";
export default function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect (() => {
        getProducts().then((data) =>{
            setProducts(data);
            setLoading(false)
        });
    }, []);

    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="flex flex-wrap justify-center items-center w-full mx-auto">
                    {products.map((prod) =>(
                        <Items {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}