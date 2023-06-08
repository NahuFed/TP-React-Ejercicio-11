import React from 'react';

import { Card } from 'react-bootstrap';

const Titulo = ({titulo}) => {
    return (
    <Card.Title>{titulo}</Card.Title>
    );
};

export default Titulo;