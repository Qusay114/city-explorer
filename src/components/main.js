import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';


class Main extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            location:'',
            query:'',
            found:'none',
            show:false,
        }
    }

    getLocation = async (event) => {
        event.preventDefault();
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.query}&format=json`;
        let request = {};
        try{request = await axios.get(url) } 
        catch {
            this.setState({show:true , found:'none'});
            return ;
        };

        this.setState({
            show:false,
            found:'block',
          location:request.data[0] ,

        })};

    updateQuery = (event) => {
            event.preventDefault();
            this.setState({query:event.target.value})   
          };

    render(){
        return(
            <div style={{height:'80rem'}}>
      <Form onSubmit={this.getLocation} style={{marginTop:'4rem'}}>
        <Form.Group >
            <Form.Control type="text" placeholder="Location , e.g: amman" onChange={this.updateQuery} style={{width:'15rem' , display:'inline-block'}} />
            <Button type="submit" style={{marginLeft:'3rem'}}>Search</Button>
        </Form.Group>
      </Form>
      <div style={{display:`${this.state.found}`}}>
      <h1 style={{fontSize:'1.5rem' , marginTop:'3rem'}}>City Location : {this.state.location.display_name} </h1>
      <Card style={{marginTop:'4rem' , marginLeft:'25%',marginBottom:'10rem', width:'50%'}}>
          <Card.Header style={{textAlign:'center'}}>{this.state.location.display_name}</Card.Header>
          <Card.Body>
              <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.location.lat},${this.state.location.lon}&zoom=10`} alt='' />
          </Card.Body>
      </Card>
     </div>
     <Alert show={this.state.show} variant="success">
        <Alert.Heading>Location not Found Error Code:404 :/</Alert.Heading>
        <p>
          Sorry , we can't find the location your are exploring about <br></br>
          try agian by typing the location correctly
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => this.setState({show:false})} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
      
      </div>
        )
    }
}


export default Main