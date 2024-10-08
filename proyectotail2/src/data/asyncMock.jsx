export const products = [
{
    id: 1,
    name: 'Juan Valdez',
    price: '$10.000',
    description: 'a',
    stock: 5,
    img: 'https://jumbo.vtexassets.com/arquivos/ids/311068/Principal-5144.jpg?v=637025995573070000'
},
    {
        id: 3,
        name: 'Juan Valdez',
        price: '$10.000',
        description: 'a',
        stock: 5,
        img: 'https://www.prisa.cl/media/cache/attachment/filter/product_gallery_main/b6b1adc76b36bd6a7f81344215e93277/63921/66180ac9e566e812298492.jpg'
    },

    {
        id: 2,
        name: 'Juan Valdez',
        price: '$10.000',
        description: 'a',
        stock: 5,
        img: 'https://http2.mlstatic.com/D_NQ_NP_730607-MLC76444209589_052024-O.webp'
    }
]
export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products); 
        }, 2000);
    })
}