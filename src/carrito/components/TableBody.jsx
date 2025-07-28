import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"


export const TableBody = ({ title, price, images, id, cantidad, listaCompras }) => {

    const { aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    return (

        <tr>
            <th className="titulo">{title}</th>
            <td className="precio">{price}</td>
            <td className="imagenCar"> <img className="imagenCarrito" src={images} alt="" /></td>

            <td className="botones-cantidad-md containerBtn">
                <button className="btn btn-ouline-warning me-2"
                    onClick={() => { disminuirCantidad(id) }}>-</button>
                <button className="btn btn-warning me-2">{cantidad}</button>
                <button className="btn btn-ouline-warning"
                    onClick={() => { aumentarCantidad(id) }}>+</button>
            </td>

            <td className="eliminabtn"><button
                type="button"
                className="btn btn-outline"
                onClick={() => { eliminarCompra(id) }}
                disabled={listaCompras < 1} ><i className="bi bi-trash3 text-danger fs-5"></i></button></td>
        </tr>
    )
}
