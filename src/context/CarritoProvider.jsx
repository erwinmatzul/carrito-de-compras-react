import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"
import { TYPES } from "./types"

const initialState = []

const comprasReducer = (state = initialState, action = {}) => {

  switch (action.type) {

    case TYPES.agregarCompra:

      return [...state, action.payload]

    case TYPES.aumentarCantidad:

      return state.map(item => {
        const cant = item.cantidad + 1

        if (item.id == action.payload) {
          return { ...item, cantidad: cant }
        }
        else {
          return item
        }
      })

    case TYPES.disminuirCantidad:

      return state.map(item => {
        const cant = item.cantidad - 1

        if (item.id == action.payload && item.cantidad > 1) {
          return { ...item, cantidad: cant }
        } else {
          return item
        }
      })

    case TYPES.eliminarCompra:

      return state.filter(compra => compra.id != action.payload)

    default:
      return state
  }

}
export const CarritoProvider = ({ children }) => {

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

  const agregarCompra = (compra) => {

    compra.cantidad = 1

    const action = {
      type: TYPES.agregarCompra,
      payload: compra,
    }
    dispatch(action)
  } 

  const aumentarCantidad = (id) => {

    const action = {
      type: TYPES.aumentarCantidad,
      payload: id,
    }
    dispatch(action)

  }
  const disminuirCantidad = (id) => {

    const action = {
      type: TYPES.disminuirCantidad,
      payload: id,
    }
    dispatch(action)
  }

  const eliminarCompra = (id) => {

    const action = {
      type: TYPES.eliminarCompra,
      payload: id,
    }
    dispatch(action)
  }
  return (
    <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
      {children}
    </CarritoContext.Provider>
  )
}
