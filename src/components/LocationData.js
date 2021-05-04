import React from 'react';
import Card from 'react-bootstrap/Card';

class LocationData extends React.Component {

    render(){
        return(
            <>
            <h1 style={{fontSize:'1.5rem' , marginTop:'3rem'}}>City Location : {this.props.location} </h1>
            <Card style={{marginTop:'4rem' , marginLeft:'25%',marginBottom:'10rem', width:'50%'}}>
             <Card.Header style={{textAlign:'center'}}>{this.props.location}</Card.Header>
             <Card.Body>
              <Card.Img src={this.props.imageUrl} alt={this.props.alt} />
            </Card.Body>
             </Card>
             </>
        )
    }
}


export default LocationData ;