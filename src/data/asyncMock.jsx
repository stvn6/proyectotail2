export const products = [
{
    id: 1,
    name: 'Liofilizado Tradicional',
    price: '10000',
    description: 'Juan Valdez',
    stock: 5,
    img: 'https://www.juanvaldez.cl/cdn/shop/files/LiofilizadoTradicional95gr.jpg?v=1720100898&width=713',
    category: 'liofilizado',
    sizes: ['95gr']
},
    {
        id: 2,
        name: 'Liofilizado Avellana',
        price: '10000',
        description: "Juan Valdez",
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/LiofilizadoAvellana95gr.jpg?v=1720100885&width=713',
        category: 'liofilizado',
        sizes: ['95gr']
    },

    {
        id: 3,
        name: 'Liofilizado Descafeinado',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/LiofilizadoTradicionalDescafeinado95gr.jpg?v=1720100893',
        category: 'liofilizado',
        sizes: ['95gr']

    },
    {
        id: 4,
        name: 'Café Volcán',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/Volcan250molido.jpg?v=1725380514',
        category: 'grano',
        sizes: ['250gr']

    },
    {
        id: 5,
        name: 'Café Colina',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CafeColina250gr.jpg?v=1720100952',
        category: 'grano',
        sizes: ['250gr']

    },
    {
        id: 6,
        name: 'Café Cumbre',
        price: '11200',
        description: 'Juan Valdez',
        stock: 5,
        img: 'https://www.juanvaldez.cl/cdn/shop/files/CafeCumbre250gr.jpg?v=1720100949',
        category: 'grano',
        sizes: ['250gr']

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
