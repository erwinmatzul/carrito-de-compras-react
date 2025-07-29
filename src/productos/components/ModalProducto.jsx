import { useContext } from "react";
import { Button, Modal, Image, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../carrito/context/CarritoContext";

export const CarritoModal = ({ show, onHide, imagen, titulo, precio, descripcion, id }) => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const producto = listaCompras.find(item => item.id == id)

    return (
        <Modal show={show} onHide={onHide} size="lg" aria-labelledby="carrito-modal" centered>

            <Modal.Body className="modal-body-custom">
                <Row className="modal-row">

                    <Col xs={12} className="modal-header-success">
                        <i className="bi bi-check-circle-fill modal-icon"></i>
                        <h5 className="modal-title">Añadido al carrito</h5>
                    </Col>

                    <Col xs={3}>
                        <Image src={imagen} fluid className="modal-product-img" />
                    </Col>

                    <Col xs={9}>
                        <p className="modal-product-title fw-bold fs-5">
                            {titulo}
                        </p>
                        <p className="card-descripcion fs-6">
                            {descripcion}
                        </p>
                        <p className="modal-product-price">Q {precio}.00</p>
                        <Badge bg="warning" text="dark" className="modal-badge">🚀 Express</Badge>

                        <div className="modal-botones">
                            <Button variant="outline-danger" onClick={() => { eliminarCompra(id); onHide() }} ><i className="bi bi-trash" /></Button>
                            <Button variant="outline-secondary" onClick={() => { disminuirCantidad(id) }}>-</Button>
                            <span>{producto?.cantidad || 0}</span>
                            <Button variant="outline-secondary" onClick={() => { aumentarCantidad(id) }}>+</Button>
                        </div>
                    </Col>
                </Row>

                <hr />

                <div className="modal-envio-gratis">
                    ¡Tienes <span className="modal-subrayado">Envío Gratis</span> 🎉!
                </div>

                <div className="modal-boton-final">
                    <Button as={Link} variant="warning" size="lg" className="modal-btn-continuar" to="/carrito">
                        Continuar al carrito
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};
