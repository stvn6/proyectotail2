export const products = [
{
    id: 1,
    name: 'Producto Uno',
    price: 0,
    despcription: 'a',
    stock: 5,
    img: 'https://jumbo.vtexassets.com/arquivos/ids/311068/Principal-5144.jpg?v=637025995573070000'
}

]
export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products); 
        }, 2000);
    })
}