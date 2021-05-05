import React from 'react';
import axios from 'axios';
import LocationSearch from './LocationSearch';
import LocationData from './LocationData';
import ErrorMessage from './ErrorMessage';
import Weather from './Weather';
import Movies from './Movies';
import Loading from './Loading';


class Main extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            location:{},
            query:'',
            found:false,
            show:false,
            errorMesg:'',
            weatherData:[],
            moviesData:[],
            waitReqs:false , 
            
        }
    }

    getLocation = async (event) => {
        event.preventDefault();
        this.setState({
            weatherData:[],
            moviesData:[],
        })
        event.target.searchBox.value = '';
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.query}&format=json`;
        let request = {};
        try{request = await axios.get(url) } 
        catch(error){
            this.setState({show:true , found:false , errorMesg:error.message});
            return ;
        };
        
        this.setState({
            show:false,
            found:true,
            errorMesg:'',
            location:request.data[0] ,
            
        })
        const urlReq = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
        const urlMovies = `${process.env.REACT_APP_SERVER}/movies?city=${this.state.query}`;
        this.setState({waitReqs:true});
        const localReq = await axios.get(urlReq);
        const moviesReq = await axios.get(urlMovies);
        
        this.setState({
            weatherData:localReq.data , 
            moviesData:moviesReq.data ,
            waitReqs:false,
        });
      
      };

    updateQuery = (event) => {
            event.preventDefault();
            this.setState({query:(event.target.value).toLowerCase()})   
          };

    handleCloseMessage = () => this.setState({show:false});

    render(){
        return(
        <div style={{minHeight:'80rem'}}>

            <LocationSearch getLocation={this.getLocation} 
            updateQuery={this.updateQuery} 
            />

            {this.state.found && 
                <LocationData 
                location={this.state.location.display_name} 
                imageUrl={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.location.lat},${this.state.location.lon}&zoom=10`} 
                alt='city' />
            }

            <ErrorMessage handleCloseMessage={this.handleCloseMessage} 
            show={this.state.show} 
             errorMesg={this.state.errorMesg}
             />

            <Loading wait={this.state.waitReqs} />
            <Weather weatherData={this.state.weatherData} />
            <Movies moviesData={this.state.moviesData}/>
      </div>
        )
    }
}


export default Main