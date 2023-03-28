import axios from 'axios'
import React from 'react'
import { Modal, Alert, Button } from 'react-bootstrap'
import swal from 'sweetalert'

export default function DeleteModalAdmin({isOpen, close, id}) {
    const handleDelete=()=>{
        const url = `https://node-vercel-ahor.vercel.app/api/users/${id}`;
        axios.delete(url)
        .then(response => {
            swal('Vaya, ya no esta', 'Usuario eliminado con éxito.', 'warning'); 
            close()
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
    <Modal show={isOpen} onHide={close}>
    
        <Modal.Header closeButton>
            <Modal.Title>Eliminar cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert variant='danger'>¿Estas seguro de ELIMINAR tu cuenta?<b> TODOS TUS DATOS SE PERDERAN </b></Alert>
        <form>
        <input value={id} style={{display:'none'}}></input>
        </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='dark' onClick={close}>Cancelar</Button>
            <Button variant='danger' onClick={handleDelete} >Eliminar</Button>
        </Modal.Footer>
    </Modal>
  )
}
