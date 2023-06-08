import React from 'react';
import { Col,Card,Button } from 'react-bootstrap';

const Noticia = () => {
    return (
        <Col xs={12} md={6} lg={4} className='mb-4' >
        <Card>
          <Card.Header>
            <Card.Title>Noticia</Card.Title>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <div
              className="cajaColorida"
              style={{
                backgroundColor: "white",
                width: "10rem",
                height: "8rem",
              }}
            ></div>
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