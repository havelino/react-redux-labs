import React, { Component } from 'react';

class ShowingDate extends Component {

    render() {

        let film = {};

        function changueName(e){
            console.log(e.target.value);
            film.name=e.target.value;
        }

        function changueDate(e){
            console.log(e.target.value);
            film.date=e.target.value;
        }


        return (
            <div>
                <input type="date" id="end" name="trip" onChange={changueDate}
                    min="2018-01-01" max="2018-12-31" value={film.date}></input>

                <input type="text" onChange={changueName} value={film.name}></input>
                <button id="button_film" type="button" onClick={() => this.props.pickDate(film)}>
                    Select Film
            </button>
            </div>);
    }
}

export default ShowingDate;