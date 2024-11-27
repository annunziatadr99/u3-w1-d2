import { Container, Row, Col, Card, Button } from "react-bootstrap";

import books from "../books/fantasy.json";

const AllTheBooks = () => (
  <Container>
    <Row>
      {books.map((book) => (
        <Col key={book.asin}>
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the.
              </Card.Text>
              <Button variant="primary">{book.category}</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);
export default AllTheBooks;
