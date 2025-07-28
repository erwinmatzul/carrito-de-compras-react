import { useReducer } from "react"
import { FavoritosContext } from "../context/FavoritosContext"
import { FAVORITETYPES } from "../utils/favoriteTypes"
const initialState = []

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case FAVORITETYPES.agregarFavorito:

            return [...state, action.payload]

        case FAVORITETYPES.eliminarFavorito:

            return state.filter(item => item.id != action.payload)
    }
}

export const FavoritosProvider = ({ children }) => {

    const [listaFavoritos, dispatch] = useReducer(reducer, initialState)

    const agregarFavorito = (prod) => {

        const action = {
            type: FAVORITETYPES.agregarFavorito,
            payload: prod,
        }
        dispatch(action)
    }


    const eliminarFavorito = (id) => {

        const action = {
            type: FAVORITETYPES.eliminarFavorito,
            payload: id,
        }
        dispatch(action)
    }

    return (
        <FavoritosContext.Provider value={{ listaFavoritos, agregarFavorito, eliminarFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}
