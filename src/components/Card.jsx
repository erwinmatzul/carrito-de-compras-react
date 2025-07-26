import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const ProductoCard = ({ imagen, titulo, description, precio, producto }) => {

    const { listaCompras, agregarCompra, eliminarCompra } = useContext(CarritoContext);

    const  estaEnCarrito  = listaCompras.find(a => a.id == producto.id);

    const agregar = () => {
        agregarCompra(producto);
    }
    const quitar = () => {
        eliminarCompra(producto.id);
    }
    return (
        <div className="card">
            <img src={imagen} alt={titulo} />
            <div className="card-body">
                <h3 className="card-titulo">{titulo}</h3>
                <p className="card-descripcion">{description}</p>
                <p className="card-precio">Q {precio}</p>
                

                {
                    estaEnCarrito
                        ? <button className="card-btn-quitar" onClick={quitar}>Quitar del Carrito</button>
                        : <button className="card-btn-agregar" onClick={agregar}>Agregar al Carrito</button>
                }
            </div>
        </div>
    )
}
