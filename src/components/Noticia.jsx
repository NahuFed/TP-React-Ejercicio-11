import React from 'react';
import { Col,Card,Button } from 'react-bootstrap';
import Titulo from './Titulo';

const Noticia = ({titulo, image_url, descripcion,}) => {
    return (
        <Col xs={12} md={6} lg={4} className='mb-4' >
        <Card>
          <Card.Header>
            <Titulo titulo={titulo}></Titulo>
          </Card.Header>
            <Card.Img variant="top" src={image_url} />
          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Text>{descripcion} </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-center">
            <Button variant="primary">
              Ver noticia completa
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Noticia;