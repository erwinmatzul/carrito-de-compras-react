
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { TableBody } from "../components/TableBody"
import { TableHeader } from "../components/TableHeader"
import { TableFooter } from "../components/TableFooter"
import { BtnComprar } from "../components/BtnComprar"

export const CarritoPages = () => {

    const { listaCompras } = useContext(CarritoContext)

    return (
        <>
            <div className="table-responsive">
                <table className="table mt-3">

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
                </table>
                <BtnComprar />
            </div>
        </>
    )
}

