import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import GrillaNoticias from "./GrillaNoticias";

const FormularioNoticias = () => {
  const [arrayNoticias, setArrayNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    consultarAPI();
  }, [busqueda]);

  const handleSelect = (e) => {
    setBusqueda(e.target.value);
    filtrar(busqueda);
  };

  const filtrar = (terminoBusqueda) => {
    let resultadosBusqueda = arrayNoticias.filter((noticia) => {
      if (
        noticia.category
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return noticia;
      }
    });
    setArrayNoticias(resultadosBusqueda);
  };
  const consultarAPI = async () => {
    //peticion GET
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?country=ar&apikey=pub_24185fcb0d47542298171f751b8c6946a2ab8"
      ); //direccion de la api
      const datos = await respuesta.json();
      console.log(respuesta);      
      setArrayNoticias(datos.results);
      console.log(arrayNoticias);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border">
      <Form className="border-bottom p-3">
        <Row>
          <Col xs="4">
            <Form.Label>Categoria</Form.Label>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onSelect={(e) => handleSelect(e)}              
            >
              <option value="">Selecciona la Categoria</option>
              <option value="top">Top</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="technology">Tecnologia</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      <GrillaNoticias arrayNoticias={arrayNoticias}></GrillaNoticias>
    </div>
  );
};
export default FormularioNoticias;
