
import { useEffect, useState } from "react"
import { ProductosContext } from "./ProductosContext"

export const ProductosProvider = ({ children }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchProductos = async () => {
        try {
            const response = await fetch("https://api.escuelajs.co/api/v1/products")

            if (!response.ok) {
                throw new Error("Hubo un error en la petición")
            }
            const data = await response.json()
            setProductos(data)

        } catch (error) {
            setError(error.message)

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchProductos()

    }, [])

    return (
        <ProductosContext.Provider value={{ productos, loading, error }} >
            {children}
        </ ProductosContext.Provider>
    )
}
