import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


class Movies extends React.Component{

    render(){
        return(
            <Row>
                
            {this.props.moviesData.map( data => {
            
            return ( 
                <Card style={{ width: '22rem' ,minHeight:'40rem' , margin:'5em 0em 10em 3em'  }}>
                <Card.Img src={data.image_url} alt='' />
                <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>overview: {data.overview}</Card.Text>
                <Card.Text>average_votes: {data.average_votes}</Card.Text>                
                <Card.Text>total_votes: {data.total_votes}</Card.Text>
                <Card.Text>popularity: {data.popularity}</Card.Text>                
                <Card.Text>released_on: {data.released_on}</Card.Text>                
                </Card.Body>
            </Card> 
            ) })}
            </Row>
        )
    }
}

export default Movies ;