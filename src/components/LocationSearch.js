import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LocationSearch extends React.Component{

    render(){
        return(
            <Form onSubmit={this.props.getLocation} style={{marginTop:'4rem'}}>
        <Form.Group >
            <Form.Control type="text" placeholder="Location , e.g: amman" name='searchBox' onChange={this.props.updateQuery} style={{width:'15rem' , display:'inline-block'}} />
            <Button type="submit" style={{marginLeft:'3rem'}}>Explore</Button>
        </Form.Group>
      </Form>
        )
    }
}


export default LocationSearch ;