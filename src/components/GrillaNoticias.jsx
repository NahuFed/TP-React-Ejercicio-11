import React from 'react';
import { Row } from 'react-bootstrap';
import Noticia from './Noticia';

const GrillaNoticias = () => {
    return (
        <>
        <Row className='m-1'>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>
            <Noticia></Noticia>


        </Row>
        </>
    );
};

export default GrillaNoticias;