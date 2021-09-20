import React from 'react';
import Card from 'react-bootstrap/Card';
import {useHistory} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function About() {

  let history = useHistory();

  return (
<Card>
    <Card.Body>
        <Card.Header><h4>Collection of Books</h4></Card.Header>
        <Card.Text>

        <Card.Text>
        <Button className="btn btn-success" onClick = {() => history.push('/home')}>Back</Button>
        </Card.Text>

        </Card.Text>
    </Card.Body>
</Card>

  );
}

export default About;