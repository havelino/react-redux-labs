import React,{Component} from 'react';
import Seat from './Seat'

class Table extends Component{

    render(){
        console.log("table:",this.props.table)
        const table = this.props.table;
        return(
            <div>
                <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Theather</td>
                        <td>Number</td>
                        <td>Seats</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{table.id}</td>
                        <td>{table.theater_id}</td>
                        <td>{table.table_number}</td>
                        <td>{table.seats.map((s,i)=><Seat seat = {s} key={i}></Seat>)}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default Table;