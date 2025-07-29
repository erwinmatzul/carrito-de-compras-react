
import { useContext, useState } from "react"
import { ProductoCard } from "../../favoritos/components/Card"
import { ProductosContext } from "../context/ProductosContext"
import { Spinner, Alert } from 'react-bootstrap';
import { FormControls } from "../components/FormControl";
import { useBuscarProducto } from "../hooks/useBuscarProducto";

export const ComprasPages = () => {

    const [valor, setValor] = useState("")

    const { productos, loading, error } = useContext(ProductosContext)

    const { dataFilter } = useBuscarProducto(valor)

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

            <FormControls setValor={setValor}></FormControls>

            <div className="cardContainer">
                {
                    (dataFilter.length > 0 ? dataFilter : productos).map(producto => {
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
