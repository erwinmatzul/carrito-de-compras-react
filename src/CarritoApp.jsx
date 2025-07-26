import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarPrincipal } from "./components/NavBar"
import { ComprasPages } from "./pages/ComprasPages"
import { CarritoPages } from "./pages/CarritoPages"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>

        <NavbarPrincipal></NavbarPrincipal>

        <div className="container">
          <Routes>
            <Route path="/" element={<ComprasPages to="/"></ ComprasPages>}></Route>
            <Route path="/carrito" element={<CarritoPages></CarritoPages>}></Route>
            <Route path="/*" element={<Navigate to="/"></ Navigate>}></Route>
          </Routes>

        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}
