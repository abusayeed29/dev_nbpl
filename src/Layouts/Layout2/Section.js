import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import {Carousel } from 'react-bootstrap';
import Slider from "react-slick";
import '../Layout2/Section.css';

import img1 from '../../assets/images/slider1.jpg';
import img2 from '../../assets/images/slider2.jpg';
import img3 from '../../assets/images/slider3.jpg';
//import img2 from '../../assets/images/hero-2-shape.png';

class Section extends Component {
    render() {

        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <React.Fragment>
                <section className="position-relative align-items-center bg-gradient-primary momt-60" id="home">
                    <div className="hero-2-bg-overlay"></div>

                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            <Carousel.Caption className="caption">
                                <h3>READY MIX CONCRETE</h3>
                                <p>BE SURE.BUILD SURE</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />

                            <Carousel.Caption className="caption">
                                <h3>PAVEMENT TILES</h3>
                                <p>BE SURE.BUILD SURE</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Second slide"
                            />

                            <Carousel.Caption className="caption">
                                <h3>PAVEMENT TILES</h3>
                                <p>BE SURE.BUILD SURE</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>


                    {/* <Slider {...settings}>

                        <div className="item">
                            <img src={img1} alt="" className="" />

                            <div className="caption">
                                <h3>READY MIX CONCRETE</h3>
                                <h3>BE SURE.BUILD SURE</h3>
                            </div>
                        </div>
                        <div className="item">
                            <img src={img2} alt="" className="" />
                            <div className="caption">
                                <h3>PAVEMENT TILES</h3>
                                <h3>BE SURE.BUILD SURE</h3>
                            </div>
                        </div>

                    </Slider> */}

                </section>
            </React.Fragment>
        );
    }
}

export default Section;