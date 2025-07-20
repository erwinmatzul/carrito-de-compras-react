
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const BtnComprar = () => {

    const { listaCompras } = useContext(CarritoContext)

    const imprimir = () => {

        return alert("Su compra fue con éxito")
    }
    return (
        <div className="btn-comprar">
            <button className="btn-comprarProd"
                onClick={imprimir}
                disabled={listaCompras == 0}>
                <i className="bi bi-bag-fill">
                </i> Comprar</button>
        </div>

    )
}
