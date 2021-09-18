import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import {Slide, Zoom, Flip} from "react-reveal";
//Import Section Title
import SectionTitle from "../common/section-title";
import qualityimg from "../../assets/images/quality.jpg";

class Quality extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section" id="quality">
                    <Container>
                        <Row>
                            <Col md={{size:6}} className="my-auto">
                                <Row>
                                    <Col md={12}>
                                        <h3 className="font-weight-normal text-dark">Quality</h3>
                                        {/* <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6> */}
                                        <p className="font-weight-light text-justify">
                                        All kinds of raw materials are received after thorough inspection by our experienced Quality Assurance team from real estate wing. Double check is done by putting them through tests (ASTM standards). After proper checking and screening, these materials are mixed in our Batching Plant from which we get the final product. Whole process is computerized which ensures the perfect mixing ratio of the materials following selected mix designs. Finally, the RMC are delivered to the sites by transit mixer trucks. We take pride in saying that the very same products are given to the clients those are used by our in house concerns.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={{size:5, offset :1}}>
                                <Slide right>
                                    <div className="image_effect">
                                        <img src={qualityimg} className="img-fluid"/>
                                    </div>
                                </Slide>
                            </Col>
                        </Row>

                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Quality;