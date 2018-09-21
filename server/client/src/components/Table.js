import React,{Component} from 'react';
import Seat from './Seat'

class Table extends Component{

    render(){
        console.log("tables:",this.props.tables)
        return(
            <div>
                <h5>Table component</h5>
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
                        <td>{this.props.tables[0].id}</td>
                        <td>{this.props.tables[0].theater_id}</td>
                        <td>{this.props.tables[0].table_number}</td>
                        <td><Seat seats = {this.props.tables[0].seats}></Seat></td>
                    </tr>
                    <tr>
                        <td>{this.props.tables[1].id}</td>
                        <td>{this.props.tables[1].theater_id}</td>
                        <td>{this.props.tables[1].table_number}</td>
                        <td><Seat seats = {this.props.tables[1].seats}></Seat></td>
                    </tr>
                    <tr>
                        <td>{this.props.tables[2].id}</td>
                        <td>{this.props.tables[2].theater_id}</td>
                        <td>{this.props.tables[2].table_number}</td>
                        <td><Seat seats = {this.props.tables[2].seats}></Seat></td>
                    </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

export default Table;