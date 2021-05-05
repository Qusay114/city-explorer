import React from 'react';

class Weather extends React.Component{

    render(){
        return(
            <div>
                
            {this.props.weatherData.map( data => {
                return(<>
                    <div>Date: {data.date}</div> 
                    <div>Description: {data.description}</div> 
                    <br></br><br></br>
                    </>
                )
                    }) 
            }
            </div>
        )
    }
}


export default Weather ;