
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
        </>
    )
}

