import { Container } from 'react-bootstrap';
import FormularioNoticias from './components/FormularioNoticias'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
    <Container className='main mt-5'>
      <h1 className='text-center'>Noticias</h1>
    <FormularioNoticias></FormularioNoticias>     
    </Container>
    <footer className="bg-dark text-center text-light py-4">
        <p>&copy; Todos los derechos reservados </p>
      </footer>    
    </>
  )
}

export default App
