import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Footer link
import FooterLinks from "./footer-links";

import "./Footer.css";

//Import Logo
import logodark from "../../assets/images/logo/logo-dark.png";

class Footer extends Component {
    state = {
        links : [
            { id : 1, title : "Services",
              child : [
                  { title : "Digital Marketing", link : "/" },
                  { title : "Business Analysis", link : "/" },
                  { title : "How It Work", link : "/" },
              ]
            },
            { id : 2, title : "About",
              child : [
                  { title : "Contact Us", link : "/" },
                  { title : "FAQs", link : "/" },
                  { title : "Privacy Policy", link : "/" },
              ]
            },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <section className="footer bg-light2">
                    <Container>
                        <Row>
                            <Col className="text-center">
                                
                                        <h4 className="footer-list-title text-white mb-3">Stay Connected</h4>
                                        <p className="text-white f-14">Address: H # 28/A, R # 83, Gulshan - 2, Dhaka - 1212</p>
                                        <p className="text-white mb-2">EMail: info@navana-nbpl.com</p>
                                        <h6 className="text-white font-weight-normal">Phone: +88 01708466400, +88 01708466404</h6>
                                        <ul className="list-unstyled footer-social-list mt-4">
                                            <li className="list-inline-item"><Link to="#"><i className="mdi mdi-facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#"><i className="mdi mdi-instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#"><i className="mdi mdi-linkedin"></i></Link></li>
                                        </ul>
                                   
                            </Col>
                        </Row>

                        {/* Render footer links */}
                        <FooterLinks/>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Footer;