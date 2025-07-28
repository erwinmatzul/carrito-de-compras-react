import { useContext, useState } from "react";
import { CarritoContext } from "../../carrito/context/CarritoContext";
import { FavoritosContext } from "../context/FavoritosContext";

export const ProductoCard = ({ imagen, titulo, description, precio, producto }) => {

    const [mostrarrMessage, setMostrarMessage] = useState(false);
    const { listaCompras, agregarCompra, eliminarCompra } = useContext(CarritoContext);
    const { listaFavoritos, agregarFavorito, eliminarFavorito } = useContext(FavoritosContext)

    const estaEnLista = (lista, producto) => lista.some(item => item.id == producto.id);

    const estaEnCarrito = estaEnLista(listaCompras, producto)
    const estaEnFavorito = estaEnLista(listaFavoritos, producto)

    const agregar = () => {
        agregarCompra(producto);
    }
    const quitar = () => {
        eliminarCompra(producto.id);
    }

    const agregarAFavoritos = () => {
        agregarFavorito(producto);
    };

    const quitarDeFavoritos = () => {
        eliminarFavorito(producto.id);
    };

    return (
        <div className="card">
            <img src={imagen} alt={titulo} />
            <div className="card-body">
                <h3 className="card-titulo">{titulo}</h3>
                <p className="card-descripcion">{description}</p>
                <p className="card-precio">Q {precio}</p>

                <div
                    className='containerFav'
                    onMouseEnter={() => setMostrarMessage(true)}
                    onMouseLeave={() => setMostrarMessage(false)}
                >

                    {estaEnFavorito ? (
                        <i className="bi bi-heart-fill favoritesStyles text-danger" onClick={quitarDeFavoritos} />
                    ) : (
                        <i className="bi bi-heart empty-heart" onClick={agregarAFavoritos} />
                    )}

                    {mostrarrMessage && (
                        <div className="messageFavorito">
                            {estaEnFavorito ? "Quitar de Favoritos" : "Agregar Favoritos"}
                        </div>
                    )}
                </div>
                {
                    estaEnCarrito
                        ? <button className="card-btn-quitar" onClick={quitar}>Quitar del Carrito</button>
                        : <button className="card-btn-agregar" onClick={agregar}>Agregar al Carrito</button>
                }
            </div>
        </div>
    )
}
