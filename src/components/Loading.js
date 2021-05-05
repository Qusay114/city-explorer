import React from 'react' ;
import Spinner from 'react-bootstrap/Spinner';

class Loading extends React.Component {

    render(){
        return (
            <div style={{marginLeft:'50%'}}>
           { this.props.wait && 
             <>
            <Spinner animation="border" size="sm"  />
            <Spinner animation="border"  variant='info' />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow"  variant='info'/>
            </>
            }
            </div>
        
        )
    }
}


export default Loading ;