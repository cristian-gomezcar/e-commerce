import { ProductContext } from './ProductContext';
import { useState, useEffect } from 'react';

export const ProductosPrivider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (response.ok) {
                const data = await response.json();
                setProductos(data);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProductos(); // Corrección en el nombre de la función
    }, []);

    return (
        <ProductContext.Provider value={{ productos }}>
            {children}
        </ProductContext.Provider>
    );
}
