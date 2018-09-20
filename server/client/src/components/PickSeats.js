import React, { Component } from 'react';

class PickSeats extends Component {
    render() {
        return (<section class="portfolio" id="portfolio">
        <div class="container">
            <h2 class="text-center text-uppercase text-secondary mb-0">Pick Seats</h2>
            <h4>Where would you like to seat?</h4>
            <br></br>
            <h4>Sack Lunch</h4>
            <p> Monsay 13:00-15:00</p>
            <p> Cinema Polanco </p>
            <br></br>
            <br></br>
            <p>Table 1</p>
            <div class="row">
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 1</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 2</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 3</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 4</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 5</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 6</h5>
                </div>
            </div>
            <p>Table 2</p>
            <div class="row">
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 7</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 8</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 9</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 10</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 11</h5>
                </div>
                <div class="col-md-6 col-lg-2">
                    <h5>Seat 12</h5>
                </div>
            </div>
            <button> Checkout</button>
        </div>
    </section>
)
    }
}

export default PickSeats;