export default function Items(){
    const imgProducto = "./Image/jv1.jpg"

    return (
        <div className="felx flex-col items-center">
            <img src={imgProducto} alt="Imagen Producto"/>
            <h3 className="text-[22px] font-bold my-[15px]">Titulo Producto</h3>
            <h4>Precio</h4>
        </div>
    )
}

