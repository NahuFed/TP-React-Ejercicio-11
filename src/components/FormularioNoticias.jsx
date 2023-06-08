import React from "react";
import { useForm } from "react-hook-form";
import GrillaNoticias from "./GrillaNoticias";
import { Col, Form, InputGroup, Row} from "react-bootstrap";

const FormularioNoticias = () => {
    const {
        register,
        formState: { errors },    
        handleSubmit,
      } = useForm();
    
  return (
    <div className="border">
      <Form className="border-bottom p-3">
        <Row>
          <Col xs='4'>
          <Form.Label>Categoria</Form.Label>
          </Col>
          <Col>
          <Form.Select 
            aria-label="Default select example"
            {...register("categoria", { required: true })}
          >
            <option value="">Selecciona la Categoria</option>
            <option value="top">Top</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="technology">Tecnologia</option>
          </Form.Select>          
          </Col>
          </Row>          

      </Form>

      <GrillaNoticias></GrillaNoticias>
    </div>
  );
};

export default FormularioNoticias;
