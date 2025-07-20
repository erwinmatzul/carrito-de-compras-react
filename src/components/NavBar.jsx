import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const NavBar = () => {
    const { listaCompras } = useContext(CarritoContext)

    return (
        <nav className="navbar navbar-expand-lg bg-secondary ">
            <div className="container-fluid">
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/" className="navbar-brand"><i className="bi bi-shop fs-2 text-white fw-bolder "></i></NavLink>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active text-white fw-bolder fs-3" aria-current="page">Productos</NavLink>
                        </li>
                    </ul>
                    <NavLink to="/carrito">

                        <Badge badgeContent={listaCompras.length} color="error">
                            <ShoppingCartIcon className="icon-white" />
                        </Badge>

                    </NavLink>

                </div>
            </div>
        </nav>
    )
}
