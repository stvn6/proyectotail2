import { Link } from "react-router-dom"

export default function Items({id, name, price, img}){
    return(
        <div className="flex flex-col items-center my-[20px] pt-20 mx-[15px]">
            <Link to={`/products/${id}`} className="" ><img className="h-40 hover:scale-105 transition-all justify-between" src={img} alt="Imagen Productos" /></Link>
            <Link to={`/products/${id}`} className="text-[22px] font-bold mx-[15px] my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</Link>
            <h4 className="text-[18px] font-bold mb-[20px]">${price}</h4>
        </div>
    )
}

