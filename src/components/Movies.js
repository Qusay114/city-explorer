import React from 'react';
import Movie from './Movie';

import Row from 'react-bootstrap/Row';


class Movies extends React.Component{

    render(){
        return(
            <Row>
                
            {this.props.moviesData.map( data => {
            
            return ( <Movie image_url={data.image_url} 
                        title={data.title} 
                        overview={data.overview} 
                        average_votes={data.average_votes} 
                        total_votes={data.total_votes}
                        popularity={data.popularity}
                        released_on={data.released_on}
                        />
                
            ) })}
            </Row>
        )
    }
}

export default Movies ;