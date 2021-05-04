import React from 'react';
import axios from 'axios';
import LocationSearch from './LocationSearch';
import LocationData from './LocationData';
import ErrorMessage from './ErrorMessage';


class Main extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            location:{lat:'' , lon:''},
            query:'',
            found:false,
            show:false,
            errorMesg:'',
            weatherData:[],
            
        }
    }

    getLocation = async (event) => {
        event.preventDefault();
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
        const urlReq = `${process.env.REACT_APP_SERVER}/weather`;
        // console.log(process.env.REACT_APP_LOCATION_IQ_KEY);
        // console.log(process.env.REACT_APP_SERVER);
        const localReq = await axios.get(urlReq);
        console.log(localReq.data);
        this.setState({weatherData:localReq.data})
        
        
      };

    updateQuery = (event) => {
            event.preventDefault();
            this.setState({query:(event.target.value).toLowerCase()})   
          };

    handleCloseMessage = () => this.setState({show:false})
    render(){
        return(
            <div style={{minHeight:'80rem'}}>
      <LocationSearch getLocation={this.getLocation} updateQuery={this.updateQuery} />
      {this.state.found && 
      <LocationData location={this.state.location.display_name} imageUrl={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.location.lat},${this.state.location.lon}&zoom=10`} alt='city' />
    }
      <ErrorMessage handleCloseMessage={this.handleCloseMessage} show={this.state.show}  errorMesg={this.state.errorMesg}/>
      
     
            <div>
            {this.state.weatherData.map( data => {
                return(<>
                    <div>Data: {data.date}</div> 
                    <div>Description: {data.description}</div> 
                    <br></br><br></br>
                    </>
                )
                    }) 
            }
            </div>
      </div>
        )
    }
}


export default Main