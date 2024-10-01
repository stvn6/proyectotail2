export default function Items({id, name, price, img}){

    return (
        <div className="felx flex-col items-center">
            <img src={img} alt="Imagen Producto"/>
            <h3 className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">Titulo Producto</h3>
            <h4 className="text-[18px] font-bold mb-[20px]">Precio</h4>
        </div>
    )
}

