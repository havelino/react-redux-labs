import React, { Component } from 'react';
import FilmDetails from './FilmDetails'
import * as films from '../films.json';

class FilmsList extends Component {

    render() {
        
        const myFilm=films.pop();
        return (<div>
            <FilmDetails title={myFilm.title} overview={myFilm.overview} poster={myFilm.poster_path} homepage={myFilm.homepage}></FilmDetails>
        </div>);
    }

}

export default FilmsList;