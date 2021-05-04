import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class ErrorMessage extends React.Component{

    render(){
        return(

            <Alert show={this.props.show} variant="success">
        <Alert.Heading>{this.props.errorMesg}</Alert.Heading>
        <p>
          Sorry , we can't find the location your are exploring about <br></br>
          try agian by typing the location correctly
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={this.props.handleCloseMessage} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
        )
    }
}


export default ErrorMessage ;