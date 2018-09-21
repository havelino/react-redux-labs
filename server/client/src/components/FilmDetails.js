import React, { Component } from 'react';
import { PosterStyle } from './LandingPage.css'
import { Link } from 'react-router-dom';


class FilmDetails extends Component {
    render() {
        const p = {id:999};
        return (<section id="portfolio">
            <div className="container">
                <h2>Film details</h2>
                <br></br>
                <div><h2>{this.props.title}</h2></div>
                <a>{this.props.homepage}</a>
                <br></br>
                <PosterStyle src={this.props.poster}></PosterStyle>
                <p>{this.props.overview}</p>
                <Link to={'/pickseats/'+p.id}>PickSeats</Link>
            </div>
        </section>);
    }
}

export default FilmDetails;