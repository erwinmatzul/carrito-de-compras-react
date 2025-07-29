import { useContext } from "react"
import { ProductosContext } from "../context/ProductosContext"

export const useBuscarProducto = (valor) => {

    const { productos } = useContext(ProductosContext)

    const dataFilter = productos.filter(item => item.title.toLowerCase().startsWith(valor.toLowerCase()))

    return (

        { dataFilter }
    )
}
