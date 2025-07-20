
import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductosContext } from "../context/ProductosContext"

export const ComprasPages = () => {

    const { productos, loading, error } = useContext(ProductosContext)

    if (loading) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    if (error) {
        return <div class="alert alert-danger" role="alert">{error}</div>
    }
    return (
        <>
            <h1 className="titleCompras">Compras</h1>
            <div className="cardContainer">
                {
                    productos.map(producto => {
                        return (
                            <Card key={producto.id}
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
