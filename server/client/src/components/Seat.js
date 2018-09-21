import React, { Component } from 'react';

class Seat extends Component{
    render(){
        const seat = this.props.seat;
        return(
        <div>
           <p> Seat : {seat} </p>
        </div>
        );
    }
}

export default Seat;