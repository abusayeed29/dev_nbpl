import React, { Component } from 'react';
import { Container } from "reactstrap";
import {Slide, Zoom, Flip, Fade} from 'react-reveal'

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import featurebg from "../../assets/images/features/features-bg.png";

//Import Images
import finesand from "../../assets/images/fine-sand.jpg";
import coarsesand from "../../assets/images/coarse-sand.jpg";
import stone from "../../assets/images/stone.jpg";
import cement from "../../assets/images/cement.jpg";
import flyash from "../../assets/images/fly-ash.jpg";
import conswaste from "../../assets/images/construction-waste.jpg";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                { id: 1, img: finesand, icon: "mdi  mdi-laptop-mac", title: "Activity Reporting", desc: "Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta nobis as eligendi optio cumque nihil quis nostrum exercitationem impedit minus omnis repellendus.", link: "/" },
                { id: 2, img: coarsesand, icon: "mdi  mdi-account-group", title: "Team Management", desc: "Sed perspiciatis unde omnis natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo excepturi sint occaecati cupiditate architecto.", link: "/" },
                { id: 3, img: stone, icon: "mdi  mdi-chart-bell-curve", title: "Marketing Analysis", desc: "At vero eos accusamus iusto odio soluta nobis est eligendi optio dignissimos ducimus qui blanditiis praesentium as voluptatum deleniti corrupti quos dolores molestias occaecati.", link: "/" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="features">
                    <Container>
                        <SectionTitle
                            title1="Our "
                            title2="Products"
                            desc=""
                        />
                        <Row className="align-items-center mt-5">
                            <Col md={5} style={{background : `url(${featurebg}) center center`}}>
                                <Row>
                                    <Col md={6}>
                                        <Fade bottom>
                                        <div className="features-img mb-3 text-center">
                                            <div class="card">
                                                <img src={finesand} alt="" className="img-fluid d-block mx-auto"/>
                                                <div class="card-body p-1">
                                                    <h5 class="card-title text-dark f-15">Fine sand</h5>
                                                </div>
                                            </div>
                                        </div>
                                        </Fade>
                                    </Col>
                                    <Col md={6}>
                                        <Fade bottom delay={500}>
                                        <div className="features-img mb-3 text-center">
                                            <div class="card">
                                                <img src={coarsesand} alt="" className="img-fluid d-block mx-auto"/>
                                                <div class="card-body p-1">
                                                    <h5 class="card-title text-dark f-15">Coarse Sand</h5>
                                                </div>
                                            </div>
                                        </div>
                                        </Fade>
                                    </Col>
                                    <Col md={{size:6, offset:3}}>
                                        <Fade bottom delay={400}>
                                        <div className="features-img mb-3 text-center">
                                            <div class="card">
                                                <img src={stone} alt="" className="img-fluid d-block mx-auto"/>
                                                <div class="card-body p-1">
                                                    <h5 class="card-title text-dark f-15">Stone</h5>
                                                </div>
                                            </div>
                                        </div>
                                        </Fade>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={{size:6, offset:1}}>
                                <div className="features-box mt-5 mt-sm-0 mb-4 ">
                                    <h5 className="text-dark font-weight-normal mb-3 pt-3">Raw Materials for RMC</h5>
                                    <p className="mb-3 f-15">
                                        <ul>
                                            <li>Cement</li>
                                            <li>20 mm downgraded stone chips</li>
                                            <li>12 mm downgraded stone chips</li>
                                            <li>Sylhet sand</li>
                                            <li>Super Plasticizer Admixture</li>
                                            <li>Waterproofing Admixture</li>
                                            <li>Potable Water</li>
                                        </ul>
                                    </p>
                                </div>
                            </Col>
                        </Row>

                        <Row className="align-items-center mt-5">
                            <Col md={{size:6}}>
                                <div className="features-box mt-5 mt-sm-0 mb-4">
                                    <h5 className="text-dark font-weight-normal mb-3 pt-3">Raw Materials for Pavement Tiles</h5>
                                    <p className="mb-3 f-15">
                                        <ul>
                                            <li>Cement</li>
                                            <li>12 mm downgraded stone chips</li>
                                            <li>Sylhet sand</li>
                                            <li>Admixture</li>
                                            <li>Oxide</li>
                                        </ul>
                                    </p>
                                </div>
                            </Col>
                            <Col md={{size:5, offset:1}} style={{background : `url(${featurebg}) center center`}}>
                                <Row>
                                    <Col md={6}>
                                        <Fade bottom delay={500}>
                                        <div className="features-img mb-3 text-center">
                                            <div class="card">
                                                <img src={cement} alt="" className="img-fluid d-block mx-auto"/>
                                                <div class="card-body p-1">
                                                    <h5 class="card-title text-dark f-15">Cement</h5>
                                                </div>
                                            </div>
                                        </div>
                                        </Fade>
                                    </Col>
                                    <Col md={6}>
                                    <   Fade bottom delay={400}>
                                        <div className="features-img mb-3 text-center">
                                            <div class="card">
                                                <img src={flyash} alt="" className="img-fluid d-block mx-auto"/>
                                                <div class="card-body p-1">
                                                    <h5 class="card-title text-dark f-15">Fly ash</h5>
                                                </div>
                                            </div>
                                        </div>
                                        </Fade>
                                    </Col>
                                    <Col md={6}>
                                        <Fade bottom delay={300}>
                                        <div className="features-img mb-3 text-center">
                                            <div class="card">
                                                <img src={conswaste} alt="" className="img-fluid d-block mx-auto"/>
                                                <div class="card-body p-1">
                                                    <h5 class="card-title text-dark f-15">Construction waste</h5>
                                                </div>
                                            </div>
                                        </div>
                                        </Fade>
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

export default Features;