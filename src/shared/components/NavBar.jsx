import { Badge } from "@mui/material"
import { Navbar, Container, Nav } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../carrito/context/CarritoContext";
import { FavoritosContext } from "../../favoritos/context/FavoritosContext";

export const NavbarPrincipal = () => {
    const { listaCompras } = useContext(CarritoContext)
    const { listaFavoritos } = useContext(FavoritosContext)

    return (
        <Navbar expand="lg" className="navbar">

            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-content" className="border-0" />

                <NavLink to="/" className="navbar-brand d-flex">
                <img src="/src/shared/img/logo.png" alt="logo" className="w-50 ms-auto"/>
                </NavLink>

                <Navbar.Collapse id="navbar-content">

                    <Nav className="me-auto mb-2 mb-lg-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-link text-white fw-bolder fs-3 ${isActive ? 'active' : ''}`}>
                            Productos
                        </NavLink>
                    </Nav>

                    <Nav>

                        <NavLink to="/favoritos" className="nav-link">
                            <Badge badgeContent={listaFavoritos.length} color="error">
                                <i className="bi bi-heart-fill text-white fs-5"></i>

                            </Badge>
                        </NavLink>

                        <NavLink to="/carrito" className="nav-link">
                            <Badge badgeContent={listaCompras.length} color="error">
                                <ShoppingCartIcon className="icon-white"/>
                            </Badge>
                        </NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
