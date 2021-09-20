import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useHistory} from "react-router-dom";
import books from '../assets/books-logo2.jpg';
import Figure from 'react-bootstrap/Figure';
import About from './About';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

  let history = useHistory();

  return (

    <Container>
    <Row className="justify-content-md-center">
    <Col md="auto">
      <Card className="text-center cardBody">
        <Card.Body className = "cardBody">  
        <Figure className = "cardBody">
       <Figure.Image
        className = "cardBody"
       width={400}
       height={400}
       alt="books-logo"
       src={books}
       rounded
        />
       </Figure>
       <Card.Text className = "cardBody">
          <Button className="btn btn-secondary" size="large" onClick = {() => history.push('/about')}>About</Button>
          {' '}
          <Button className="btn btn-secondary" size="large" onClick = {() => history.push('/login')}>Login</Button>
        </Card.Text> 
        </Card.Body>
      </Card>
      </Col>
 </Row>
 </Container>
   );
}
export default Home;