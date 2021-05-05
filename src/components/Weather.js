import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Weather extends React.Component{

    render(){
        return(
            <Row>
                
            {this.props.weatherData.map( data => {
                return(<Card style={{margin:'3rem' , minHeight:'8rem' , minWidth:'15rem'}}>
                        <Card.Body>
                            <Card.Text>Date: {data.date}</Card.Text> 
                            
                            <Card.Text>Description: {data.description}</Card.Text> 
                        </Card.Body>
                    </Card>
                )
                    }) 
            }
            </Row>
        )
    }
}


export default Weather ;