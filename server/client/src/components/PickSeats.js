import React, { Component } from 'react';
import Table from './Table'

class PickSeats extends Component {
    
    render() {
        const showing_id = this.props.match.params;
        const tables = [{ id: 19, theater_id: 2, table_number: 4, seats: [1, 2, 3, 4] },
        { id: 20, theater_id: 2, table_number: 6, seats: [5, 6] },
        { id: 21, theater_id: 2, table_number: 6, seats: [5, 6] }];

        console.log(showing_id);
        console.log("history:",this.props.history)

        return (<section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Pick Seats</h2>
                <h4>Where would you like to seat?</h4>
                <br></br>
                <h4>Sack Lunch</h4>
                <p> Monsay 13:00-15:00</p>
                <p> Cinema Polanco </p>
                <br></br>
                <br></br>
                <Table tables={tables}></Table>
                <button onClick = {()=>this.props.history.push('/checkout')} > Checkout</button>
            </div>
        </section>
        )
    }

    
}

export default PickSeats;