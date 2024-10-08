export default function Items({id, name, price, img}){

    return(
        <div className="flex flex-col items-center my-[20px] pt-20 mx-[15px]">
            <img className="h-40 hover:scale-105 transition-all justify-between" src={img} alt="Imagen Productos" />
            <h3 className="text-[20px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[brown]">{name}</h3>
            <h4 className="text-[18px] font-bold mb-[20px]">{price}</h4>
        </div>
    )
}

