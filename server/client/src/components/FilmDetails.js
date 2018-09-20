import React, { Component } from 'react';
import {PosterStyle} from './LandingPage.css'


class FilmDetails extends Component {
    render() {
        return (<section class="portfolio" id="portfolio">
        <div class="container">
            <h2 class="text-center text-uppercase text-secondary mb-0">Film details</h2>
            <br></br>
            <div><h2>Sack Lunch</h2></div>
            <div class="row">
                <PosterStyle src ="./img/posters/6.jpg"></PosterStyle>
            </div>
            <div class="row">
                <p>A comic movie about a great guy.  you cant lost this funny adventure.</p>
            </div>
            <div class="row">
                <ul>
                    Sunday 12: 00 to 14:00 hrs
                </ul>
                <ul>
                    Monday 12: 00 to 14:00 hrs
                </ul>
                <ul>
                    Tuesday 12: 00 to 14:00 hrs
                </ul>
                <ul>
                    Wensday 12: 00 to 14:00 hrs
                </ul>
            </div>
        </div>
    </section>);
    }
}

export default FilmDetails;