import React, { Component } from 'react';
import { PosterStyle } from './LandingPage.css'
import { Link } from 'react-router-dom';


class FilmDetails extends Component {
    render() {
        const p = {id:999};
        const showings = [
            {id: 110, film_id: 3, theater_id: 3,
            showing_time: "2019-09-11T21:15:00Z"},
            {id: 111, film_id: 3, theater_id: 3,
            showing_time: "2019-09-11T23:15:00Z"},
            {id: 112, film_id: 3, theater_id: 3,
            showing_time: "2019-09-11T01:15:00Z"}
            ];

        return (<section id="portfolio">
            <div className="container">
                <h2>Film details</h2>
                <br></br>
                <div><h2>{this.props.title}</h2></div>
                <a>{this.props.homepage}</a>
                <br></br>
                <PosterStyle src={this.props.poster}></PosterStyle>
                <p>{this.props.overview}</p>
                {showings.map((s,i) => 
                    (<li key={i}>
                        
                        <Link to={"/pickseats/" + s.id}>Film detail : { new Date(s.showing_time).toLocaleTimeString([],{ hour: "numeric", minute: "2-digit" })}</Link>
                    </li>))}
                
            </div>
        </section>);
    }
}

export default FilmDetails;