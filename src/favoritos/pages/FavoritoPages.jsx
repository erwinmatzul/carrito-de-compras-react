import { useContext } from "react"
import { ProductoCard } from "../components/Card"
import { Spinner, Alert } from 'react-bootstrap';
import { FavoritosContext } from "../context/FavoritosContext";
import { ProductosContext } from "../../productos/context/ProductosContext";

export const FavoritoPages = () => {
  const { loading, error } = useContext(ProductosContext)
  const { listaFavoritos } = useContext(FavoritosContext)

  if (loading) {
    return <div className="d-flex justify-content-center">
      <Spinner animation="border" variant="darck" />
    </div>

  }
  if (error) {
    return <Alert variant="danger">{error}</Alert>
  } return (
    <>

      {listaFavoritos.length >= 1 ? (
        <>
          <h1 className="titleFavotios text-center">Favoritos</h1>
          <div className="cardContainer">
            {listaFavoritos.map(producto => (
              <ProductoCard
                key={producto.id}
                imagen={producto.images}
                titulo={producto.title}
                precio={producto.price}
                description={producto.description}
                producto={producto}
              />
            ))}
          </div>
        </>
      )
        : (
          <div className="continerFavorito">
            <h2 className="text-muted">Aún no has agregado favoritos.</h2>
          </div>
        )}
    </>
  )

}
