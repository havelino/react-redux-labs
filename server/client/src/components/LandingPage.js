import React, { Component } from 'react';
import ThemeSwitcher from './ThemeSwitcher'

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
                        <h2 class="font-weight-light mb-0">What would you like to see?</h2>
                    </div>
                </header>
                <br></br>
                
                <section class="portfolio" id="portfolio">
                    <div class="container">
                        <h2 class="text-center text-uppercase text-secondary mb-0">Film details</h2>
                        <br></br>
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <h4>Return to the future</h4>
                                <p>great movie</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Avengers</h4>
                                <p>great movie</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>titanic</h4>
                                <p>great movie</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Avatar</h4>
                                <p>great movie</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>DeadPool</h4>
                                <p>great movie</p>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Cirendela</h4>
                                <p>great movie</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="portfolio" id="portfolio">
                    <div class="container">
                        <h2 class="text-center text-uppercase text-secondary mb-0">Pick Seats</h2>
                        <br></br>
                        <p>Where would you like to seat?</p>
                        <div class="row">
                            <div class="col-md-6 col-lg-4">
                                <h5>Seat 1</h5>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Other Component</h4>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Other Component</h4>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Other Component</h4>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Other Component</h4>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <h4>Other Component</h4>
                            </div>
                        </div>
                    </div>
                </section>


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