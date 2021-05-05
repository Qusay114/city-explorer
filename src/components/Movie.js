import React from 'react' ;
import Card from 'react-bootstrap/Card';

class Movie extends React.Component{

    render(){
        return(
            <Card style={{ width: '22rem' ,minHeight:'40rem' , margin:'5em 0em 10em 3em'  }}>
            <Card.Img src={this.props.image_url} alt='' />
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>overview: {this.props.overview}</Card.Text>
            <Card.Text>average_votes: {this.props.average_votes}</Card.Text>                
            <Card.Text>total_votes: {this.props.total_votes}</Card.Text>
            <Card.Text>popularity: {this.props.popularity}</Card.Text>                
            <Card.Text>released_on: {this.props.released_on}</Card.Text>                
            </Card.Body>
        </Card>
        )
    }
}

export default Movie ;