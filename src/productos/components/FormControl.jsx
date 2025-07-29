import { useState } from "react"
import { Form } from "react-bootstrap"

export const FormControls = ({setValor}) => {

    const [inputValue, setInputValue] = useState("")

    const handleOnSubmit = (event) => {
        event.preventDefault()
        setValor(inputValue)
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value)
        setValor(event.target.value)
    }

    return (

        <Form className="containerForm" onSubmit={handleOnSubmit}>
            <Form.Control type="text"
                className="input"
                value={inputValue}
                placeholder="Buscar producto..."
                onChange={handleOnChange}
            />

        </Form>

    )
}
