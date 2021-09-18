import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import {Slide, Zoom, Flip, Fade} from 'react-reveal'
//Import Components
import SectionTitle from "../../components/common/section-title";
import ClientsSlider from "./Clients-slider";

class ClientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id: 1,
                    image: './images/clients/1.jpg',
                    alt: 'images',
                },
                {
                    id: 2,
                    image: './images/clients/aakash.jpg',
                    alt: 'images',
                },
                {
                    id: 3,
                    image: './images/clients/ab.jpg',
                    alt: 'images',
                },
                {
                    id: 4,
                    image: './images/clients/anz.jpg',
                    alt: 'images',
                },
                {
                    id: 5,
                    image: './images/clients/babylon.jpg',
                    alt: 'images',
                }
                , {
                    id: 6,
                    image: './images/clients/coasis.jpg',
                    alt: 'images',
                },
                {
                    id: 7,
                    image: './images/clients/dorean.jpg',
                    alt: 'images',
                },
                {
                    id: 7,
                    image: './images/clients/homes_p.jpg',
                    alt: 'images',
                },
                {
                    id: 8,
                    image: './images/clients/jcx.jpg',
                    alt: 'images',
                },
                {
                    id: 9,
                    image: './images/clients/labaid.jpg',
                    alt: 'images',
                },
                {
                    id: 10,
                    image: './images/clients/m.jpg',
                    alt: 'images',
                },
                {
                    id: 11,
                    image: './images/clients/nandan.jpg',
                    alt: 'images',
                },
                {
                    id: 12,
                    image: './images/clients/relaince.jpg',
                    alt: 'images',
                },
                {
                    id: 13,
                    image: './images/clients/rupayn.jpg',
                    alt: 'images',
                }, {
                    id: 14,
                    image: './images/clients/sanmar.jpg',
                    alt: 'images',
                },
                {
                    id: 15,
                    image: './images/clients/sheltech.jpg',
                    alt: 'images',
                },
                {
                    id: 16,
                    image: './images/clients/spectra.jpg',
                    alt: 'images',
                },
                {
                    id: 17,
                    image: './images/clients/urban.jpg',
                    alt: 'images',
                }
            ],
            testimonial: ['Amin Mohammad Foundation Ltd.',
                'Rupayan Housing Estate Ltd.',
                'Anwar Landmark Ltd.',
                'Tropical Homes Ltd.',
                'Aakash Development Ltd.',
                'Gemcom Group',
                'JCX development ltd.',
                'Sheltech (Pvt.) Ltd.',
                'Spectra properties ltd.',
                'Doreen Development Ltd.',
                'Labaid Cancer Hospital Ltd.',
                'ANZ Properties Ltd.',
                'Reliance Holdings Ltd.',
                'Sunmar Properties',
                'Urban Design & Development Ltd.',
                'NandanKanon Housing Ltd.',
                'Babylon Group',
                'Wind & Light Development ltd.',
                'Metro Rail project',
                'AB apparels ltd.',
                'Mk construction ltd.',
                'Oasis Holdings Ltd.',
                'Wonderland Housing Ltd.'
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="clients">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <h3 className="font-weight-normal mt-3 line-height-1_4">Our Happy <span className="font-weight-medium text-warning">Clients </span></h3>
                                <div className="testi-border my-4"></div>
                                {this.state.testimonial.map(data => (
                                    <li>{data}</li>

                                ))}
                            </Col>
                            <Col lg={8}>
                                <div className="images-list justify-content-between p-5">
                                    <div className="row">
                                        {
                                            this.state.images.map(data => (
                                                <div className="col-4 img-box">
                                                    <Fade bottom>
                                                        <div className="image_effect">
                                                            <img className="img-fluid m-3 p-1 bg-white" src={data.image} alt={data.alt} key={data.id} />
                                                        </div>
                                                    </Fade>
                                                </div>
                                            ))
                                        }
                                    </div>

                                </div>
                                {/* <ClientsSlider clients={this.state.clients} /> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>

        );
    }

}
export default ClientList;