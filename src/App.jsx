import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return (
   <Container fluid="md"> 
   <Row>
    <h1>Hello</h1>
    <Col md={4}> 
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quis, dolorum quas harum consequuntur dignissimos repudiandae eaque autem voluptatibus ullam, officia modi. Ipsum, cum excepturi dolor magnam accusamus quaerat possimus.
    Possimus aut deserunt dolores cupiditate numquam, neque cumque dolor, ut obcaecati necessitatibus, est ipsum minima consequatur voluptates officiis ea facere maiores optio a. Ipsa quam, eaque itaque soluta deleniti tempore!</p>
    </Col>
    <Col md={4}> 
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quis, dolorum quas harum consequuntur dignissimos repudiandae eaque autem voluptatibus ullam, officia modi. Ipsum, cum excepturi dolor magnam accusamus quaerat possimus.
    Possimus aut deserunt dolores cupiditate numquam, neque cumque dolor, ut obcaecati necessitatibus, est ipsum minima consequatur voluptates officiis ea facere maiores optio a. Ipsa quam, eaque itaque soluta deleniti tempore!</p>
    </Col>
    <Col md={4}> 
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quis, dolorum quas harum consequuntur dignissimos repudiandae eaque autem voluptatibus ullam, officia modi. Ipsum, cum excepturi dolor magnam accusamus quaerat possimus.
    Possimus aut deserunt dolores cupiditate numquam, neque cumque dolor, ut obcaecati necessitatibus, est ipsum minima consequatur voluptates officiis ea facere maiores optio a. Ipsa quam, eaque itaque soluta deleniti tempore!</p>
    </Col>
   </Row>

   </Container>
  )
}

export default App
