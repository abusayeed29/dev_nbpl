import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import {Slide, Zoom, Flip} from "react-reveal";

//Import Section Title
import SectionTitle from "../common/section-title";
import qualityimg from "../../assets/images/equipment.jpg";

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <Container>
                        <SectionTitle
                            title1="About "
                            title2="Us"
                            desc=""
                        />

                        <Row>
                            <Col md={4}>
                                <Slide left>
                                    <div className="image_effect">
                                        <img src={qualityimg} className="img-fluid"/>
                                    </div>
                                </Slide>
    
                            </Col>
                            <Col md={{size:7, offset :1}}>
                                <Row>
                                    <Col md={12}>
                                        {/* <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6> */}
                                        <p className="font-weight-light text-justify">
                                        NAVANA Building Products Limited is one of the sister concerns of NAVANA Group which is producing fully computer generated best quality concrete for various greats situated near the river Buriganga at Dipanagar, Gabtoli, Dhaka. Total land area of the Project is about 136, 800 Sft. out of which 108,000 Sft. land is used for concrete production, aggregate storage, sub-station, workshop facilities, laboratory, office accommodation, residence etc. Remaining 28,800 Sft. land is used for 2 Nos. crushing plant. An all equipped concrete laboratory is established in the NBPL premises. Trial Mix for various grades of concretes including coarse and fine aggregate, cement is conducted in NBPL laboratory. Cylinder and cubes are taken from every transit Mixer for testing workability of 7 days and 28 days compressive strength. Cylinders and cubes are tested in either BRTD, BUET or in our laboratory. For the satisfactory proportioning of the concrete ingredients, the following methods of concrete mix design are used in our laboratory.
                                        </p>
                                    </Col>
                                    <Col md={12}>
                                        <p className="font-weight-light text-justify">
                                            a) American Concrete Institute Method of Mix Design (ACI- 211.10-1991) <br/>
                                            b) Road Note No. 4 Method, currently known as DOE (Department of Environment, UK) Method of Concrete Mix Design.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default About;