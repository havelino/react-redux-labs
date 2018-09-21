import React, { Component } from 'react';
import ShowingDate from './ShowingDate'
import FilmsList from './FilmsList'
import PickSeats from './PickSeats'
import Checkout from './Checkout'




class LandingPage extends Component {
    render() {

        function chooseFilm(film) {
            console.log("chooseFilm clicked")
            console.log("film :", film);
        }


       
        return (
            

            <div id="page-top">
             <nav id="mainNav">
                    <div className="container">
                        <h3 href="#page-top">Dinner a movie</h3>
                        <div id="navbarResponsive">
                            <ul >
                                <li>
                                    <a href="#portfolio">Home</a>
                                </li>
                                <li >
                                    <a href="#about">About</a>
                                </li>
                                <li >
                                    <a href="#contact">Login</a>
                                </li>
                                <li >
                                    <a href="#contact">Checkout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <header >
                <form className="container" >
                    <h1 >Dinner a movie</h1>
                    <h1>What would you like to see?</h1>
                    <ShowingDate pickDate ={chooseFilm}></ShowingDate>
                </form>
                
            </header>
                <section>
                    <FilmsList></FilmsList>
                </section>
            </div>
        );
    }
}


export default LandingPage;