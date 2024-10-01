export const products = [
{
    id: 1,
    name: 'Producto Uno',
    price: 0,
    despcription: 'a',
    stock: 5,
    img: 'https://jumbo.vtexassets.com/arquivos/ids/311068/Principal-5144.jpg?v=637025995573070000'
},
{
    id: 2,
    name: 'Producto Dos',
    price: 0,
    despcription: '',
    stock: 5,
    img: ''
},
{
    id: 3,
    name: 'Producto Tres',
    price: 0,
    despcription: '',
    stock: 5,
    img: ''
},
{
    id: 4,
    name: 'Producto Cuatro',
    price: 0,
    despcription: '',
    stock: 5,
    img: ''
},

]
export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products); 
        }, 2000);
    })
}