import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Input from '../input/input';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../api/api';

import { userRegisterScheme, UserRegisterScheme } from '../../../models/models'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect, replace } from "react-router-dom";

function ModalCreateUser() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { register, handleSubmit } = useForm<UserRegisterScheme>({ resolver: zodResolver(userRegisterScheme) })



    function handleFunctionSubmit(data: UserRegisterScheme) {
        console.log(data)
        postData(data)
    }

    const postData = async (data: UserRegisterScheme) => {
        try {
            const response = await registerUser(data)
            handleClose();
            console.log('Resposta da API:', response);
            window.location.reload();
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Criar usuário
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(handleFunctionSubmit)} >
                        <Input name='name' placeholder='Atac Sistemas' type='name' label='Digite seu nome'
                            register={register('username')}
                        ></Input>
                        <Input name='email' placeholder='test@atac.com' type='email' label='Digite seu email' register={register('email')}></Input>
                        <Input name='phone' placeholder='+55555555' type='phone' label='Digite seu telefone' register={register('phone')}></Input>
                        <Input name='x' placeholder='0' type='x' label='Localização em X' register={register('x')}></Input>
                        <Input name='y' placeholder='0' type='y' label='Localização em Y' register={register('y')}></Input>
                        <Button variant="primary" type='submit' className='mt-3 w-100 btn-success'>
                            Registrar
                        </Button>
                    </Form>
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

export default ModalCreateUser;