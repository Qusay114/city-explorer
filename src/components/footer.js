import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Footer extends React.Component 
{
    render()
    {
        return(
            <footer>
                <Card className="text-center">
                    <Card.Header>About Us</Card.Header>
                    <Card.Body>
                        <Card.Title>City Explorer Website</Card.Title>
                        <Card.Text>
                        This website to explore city locations and showing a location image
                        </Card.Text>
                        <Button variant="primary">Contact</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">&copy;By Qusay Al-Amarat</Card.Footer>
                </Card>
            </footer>
        )
    }
}


export default Footer ;