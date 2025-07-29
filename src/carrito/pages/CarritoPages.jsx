
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { TableBody } from "../components/TableBody"
import { TableHeader } from "../components/TableHeader"
import { TableFooter } from "../components/TableFooter"
import { BtnComprar } from "../components/BtnComprar"
import Table from 'react-bootstrap/Table';

export const CarritoPages = () => {

    const { listaCompras } = useContext(CarritoContext)

    return (
        <>

            {
                listaCompras.length >= 1 ? (


                    <div className="table-responsive">
                        <Table className="table mt-3">

                            <TableHeader />
                            <tbody>
                                {
                                    listaCompras.map(prod => {

                                        return (
                                            <TableBody key={prod.id}
                                                title={prod.title}
                                                price={prod.price}
                                                images={prod.images}
                                                id={prod.id}
                                                cantidad={prod.cantidad} />
                                        )
                                    })
                                }
                            </tbody>
                            <TableFooter />
                        </Table>
                        <BtnComprar />
                    </div>
                ) : (
                    <div className="containerCarrito">
                        <img src="src/carrito/img/empty_cart.svg" alt="cart" className="imgVacio" />
                        <h2 className="text-muted">¡Tu carrito está vacío! Agrega productos para comenzar.</h2>
                    </div>
                )
            }
        </>
    )
}

