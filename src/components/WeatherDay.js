import React from 'react';
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component{

    render(){
        return(
                    <Card style={{margin:'3rem' , minHeight:'8rem' , minWidth:'30rem'}}>
                        <Card.Body>
                            <Card.Text>Description: {this.props.description}</Card.Text> 
                            <Card.Text>Date: {this.props.date}</Card.Text>                                
                        </Card.Body>
                    </Card>
            )
          }
}


export default WeatherDay ;