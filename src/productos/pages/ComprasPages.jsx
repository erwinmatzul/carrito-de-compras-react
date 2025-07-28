
import { useContext } from "react"
import { ProductoCard } from "../../favoritos/components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { Spinner, Alert } from 'react-bootstrap';

export const ComprasPages = () => {

    const { productos, loading, error } = useContext(ProductosContext)

    if (loading) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="darck" />
        </div>

    }
    if (error) {
        return <Alert variant="danger">{error}</Alert>
    }
    return (
        <>
            <h1 className="titleCompras text-center">Compras</h1>
            <div className="cardContainer">
                {
                    productos.map(producto => {
                        return (
                            <ProductoCard key={producto.id}
                                imagen={producto.images}
                                titulo={producto.title}
                                precio={producto.price}
                                description={producto.description}
                                producto={producto}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
