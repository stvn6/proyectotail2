export const products = [
{
    id: 1,
    name: 'Juan Valdez',
    price: '10000',
    description: 'Cafe sabor Chocolate',
    stock: 5,
    img: 'https://jumbo.vtexassets.com/arquivos/ids/311068/Principal-5144.jpg?v=637025995573070000',
    category: 'liofilizado',
    sizes: ['190gr', '95gr']
},
    {
        id: 2,
        name: 'Juan Valdez',
        price: '10000',
        description: "Cafe sabor Avellana",
        stock: 5,
        img: 'https://www.prisa.cl/media/cache/attachment/filter/product_gallery_main/b6b1adc76b36bd6a7f81344215e93277/63921/66180ac9e566e812298492.jpg',
        category: 'liofilizado',
        sizes: ['190gr', '95gr']
    },

    {
        id: 3,
        name: 'Juan Valdez',
        price: '10000',
        description: 'Café Volcan 250 g',
        stock: 5,
        img: 'https://http2.mlstatic.com/D_NQ_NP_730607-MLC76444209589_052024-O.webp',
        category: 'liofilizado',
        sizes: ['190gr', '95gr']

    },
    {
        id: 4,
        name: 'Juan Valdez',
        price: '10000',
        description: 'Café Volcán 454 g',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CafeVolcan250gr.jpg?v=1720100955',
        category: 'grano',
        sizes: ['250gr']

    },
    {
        id: 5,
        name: 'Juan Valdez',
        price: '10000',
        description: 'Café Colina 454 g',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/EmpacadoColina454gr.jpg?v=1720100942',
        category: 'grano',
        sizes: ['454gr']

    },
    {
        id: 6,
        name: 'Juan Valdez',
        price: '10000',
        description: 'Café Cumbre 454 g',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/EmpacadoColina454gr.jpg?v=1720100942',
        category: 'grano',
        sizes: ['454gr']

    }
]
export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 1000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 1000);
    });
};
