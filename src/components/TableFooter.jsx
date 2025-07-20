import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const TableFooter = () => {

    const { listaCompras } = useContext(CarritoContext)

    const calcularTotal = () => {
        return `Q${listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)}`
    }

    return (
        <tfoot>
            <tr className="table-secondary">
                <th><b>Total:</b></th>
                <td>{calcularTotal()}</td>
            </tr>
        </tfoot>
    )
}
