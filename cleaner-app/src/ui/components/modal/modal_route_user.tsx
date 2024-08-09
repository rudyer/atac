import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { RouteUserList } from '../user-list/route_user_list';

function ModalRouteUser() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secundary" onClick={handleShow} className='btn-success m-3'>
                Buscar rota
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Rota</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RouteUserList></RouteUserList>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='btn-danger'>
                        Fechar
                    </Button>

                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalRouteUser;