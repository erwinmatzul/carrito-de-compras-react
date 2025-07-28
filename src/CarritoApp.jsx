import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarPrincipal } from "./shared/components/NavBar"
import { ComprasPages } from "./productos/pages/ComprasPages"
import { CarritoPages } from "./carrito/pages/CarritoPages"
import { ProductosProvider } from "./productos/provider/ProductosProvider"
import { CarritoProvider } from "./carrito/provider/CarritoProvider"
import { FavoritosProvider } from "./favoritos/provider/FavoritosProvider"
import { FavoritoPages } from "./favoritos/pages/FavoritoPages"

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <FavoritosProvider>

          <NavbarPrincipal></NavbarPrincipal>

          <div className="container">
            <Routes>
              <Route path="/" element={<ComprasPages to="/" />}></Route>
              <Route path="/carrito" element={<CarritoPages />}></Route>
              <Route path="/favoritos" element={<FavoritoPages />}></Route>
              <Route path="/*" element={<Navigate to="/" />}></Route>
            </Routes>

          </div>
        </FavoritosProvider>
      </CarritoProvider>
    </ProductosProvider>
  )
}
