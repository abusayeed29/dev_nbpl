import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import {Slide, Zoom, Flip} from "react-reveal";
import '../Clients/Messages.css';
//Import Components
import SectionTitle from "../common/section-title";
import ClientsSlider from "./Clients-slider";

//Import Images
import client1 from "../../assets/images/mlogo.jpg";


class Messages extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section" id="messages">
                    <Container>
                        <Row>
                            <Col lg={8}>
                                <Slide left>
                                    <h3 className="font-weight-normal mt-3 line-height-1_4">Message From Our Honorable <span className="font-weight-medium text-warning">Vice Chairman </span></h3>
                                    <div className="testi-border my-4"></div>
                                    <p className="font-weight-light text-justify">NBPL started its journey back in 2009 when the country needed promising investment in RMC sector the most. Envisioned with Navana quality, fulfilling the ever increasing demand of RMC in Dhaka city was ideated. Staring with 50,000 cft/ month, NBPL now stands vainly with a capacity of more than 4,00,000 cft/ month.</p>
                                    <p className="font-weight-light text-justify">Being felicitated by its valued clients from all aspects, we took the leap of producing pavement tiles in and have successfully delivered 30lac square feet to till. Needless to say, our cutting edge machineries never let us compromise with the standard that we ought to offer. </p>
                                    <p className="font-weight-light text-justify">Last but not the least, clients are always rest assured that we are committed to ourselves about using first class raw materials, flawless monitoring and delivering the exact desired products on time. </p>
                                    <h5>Mr. Sajedul Islam <span className="font-weight-medium text-warning">Shuvro</span></h5>
                                </Slide>
                            </Col>
                            <Col lg={4} className="my-auto">
                                <Flip right>
                                    <div className="team_box image_effect">
                                        <img src={client1} className="img-fluid"/>

                                    </div>
                                </Flip>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Messages;