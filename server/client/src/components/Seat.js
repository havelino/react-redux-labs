import React, { Component } from 'react';

class Seat extends Component{
    render(){
        return(
        <div>
           <p> Seat : {this.props.seats} </p>
        </div>
        );
    }
}

export default Seat;