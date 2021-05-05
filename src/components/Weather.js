import React from 'react';
import WeatherDay from './WeatherDay';
import Row from 'react-bootstrap/Row';

class Weather extends React.Component{

    render(){
        return(
            <Row>
                
            {this.props.weatherData.map( data => {
               return <WeatherDay description={data.description} date={data.date} />
            })}
            </Row>
        )
    }
}


export default Weather ;