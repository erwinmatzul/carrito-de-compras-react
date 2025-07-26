import { Badge } from "@mui/material"
import { Navbar, Container, Nav } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const NavbarPrincipal = () => {
    const { listaCompras } = useContext(CarritoContext)

    return (
        <Navbar bg="secondary" expand="lg" className="navbar">

            <Container fluid>
                <Navbar.Toggle aria-controls="navbar-content" className="border-0" />

                <NavLink to="/" className="navbar-brand">
                    <i className="bi bi-shop fs-2 text-white fw-bolder"></i>
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
                        <NavLink to="/carrito" className="nav-link">
                            <Badge badgeContent={listaCompras.length} color="error">
                                <ShoppingCartIcon className="icon-white" />
                            </Badge>
                        </NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
