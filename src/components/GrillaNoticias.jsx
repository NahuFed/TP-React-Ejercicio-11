import React from 'react';
import { Row } from 'react-bootstrap';
import Noticia from './Noticia';

const GrillaNoticias = ({arrayNoticias}) => {
    return (
        <>
        <Row className='m-1'>{
            arrayNoticias.map((noticia,indiceNoticia)=> <Noticia key={indiceNoticia} titulo= {noticia.title} image_url={noticia.image_url} descripcion = {noticia.description}></Noticia>) 
        }
        </Row>
        </>
    );
};

export default GrillaNoticias;