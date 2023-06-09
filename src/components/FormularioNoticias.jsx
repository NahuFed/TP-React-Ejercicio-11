import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import GrillaNoticias from "./GrillaNoticias";

const FormularioNoticias = () => {
  const [arrayNoticias, setArrayNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  

  useEffect(() => {
    consultarAPI();
  }, []);

  const handleSelect = (e) => {
    setBusqueda(e.target.value);
  };
  // metodo de filtrado

  let resultados = []
  if(!busqueda){
      resultados = arrayNoticias;
  }else {
      resultados = arrayNoticias.filter((noticia) =>       
        noticia.category.toString().toLowerCase() ===
        busqueda.toLowerCase());    
  }


  const consultarAPI = async () => {
    //peticion GET
    try {
      const respuesta = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_24185381d5f4ddc39f57cef2b59ef72a9f8f6&country=ar"
      ); //direccion de la api
      const datos = await respuesta.json();     
      setArrayNoticias(datos.results);
      console.log(arrayNoticias)
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
              value={busqueda}
              onChange={handleSelect}
            >
              <option value="">Selecciona la Categoria</option>
              <option value="business">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="environment">Medio Ambiente</option>
              <option value="food">Comida</option>
              <option value="health">Salud</option>
              <option value="politics">Politica</option>
              <option value="science">Ciencia</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnologia</option>
              <option value="top">Top</option>
              <option value="tourism">Turismo</option>
              <option value="world">Mundo</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      <GrillaNoticias arrayNoticias={resultados}></GrillaNoticias>
    </div>
  );
};
export default FormularioNoticias;
