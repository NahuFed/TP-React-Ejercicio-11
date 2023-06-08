import { Container } from 'react-bootstrap';
import FormularioNoticias from './components/FormularioNoticias'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
    <Container className='mt-5'>
    <FormularioNoticias></FormularioNoticias>     
    </Container>
    </>
  )
}

export default App
