import React, { Component } from 'react';
import ThemeSwitcher from './ThemeSwitcher'
import FilmDetails from './FilmDetails'
import PickSeats from './PickSeats'
import Login from './Login'
import Checkout from './Checkout'




class LandingPage extends Component {
    render() {
        return (
            <body id="page-top">
                <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                    <div class="container">
                        <a class="navbar-brand js-scroll-trigger" href="#page-top">Dinner a movie</a>
                        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
          <i class="fas fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item mx-0 mx-lg-1">
                                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Home</a>
                                </li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                                </li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Login</a>
                                </li>
                                <li class="nav-item mx-0 mx-lg-1">
                                    <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Checkout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <header class="masthead bg-primary text-white text-center">
                    <div class="container">
                        <img class="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt=""></img>
                        <h1 class="text-uppercase mb-0">Dinner a movie</h1>
                        <h1>What would you like to see?</h1>
                        <input type="date" id="end" name="trip"
                            value="2018-07-29"
                            min="2018-01-01" max="2018-12-31"></input>
                    </div>
                </header>
                <br></br>

                <FilmDetails></FilmDetails>
                <PickSeats></PickSeats>
                <Checkout></Checkout>
                <Login></Login>
                <footer class="footer text-center">
                    <div class="container">
                        <p>footer</p>
                    </div>
                </footer>
            </body>
        );
    }
}

export default LandingPage;