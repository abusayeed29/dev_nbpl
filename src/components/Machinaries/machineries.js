import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Components
import SectionTitle from "../common/section-title";
import MachinesSlider from "./Machines-slider";

//Import Images
import mechine1 from "../../assets/images/mechine1.jpg";
import mechine2 from "../../assets/images/mechine2.jpg";

class Machineries extends Component {
    state = {
        machines: [
            { image: mechine1},
            { image: mechine2, name: "Roberta Guevara"},
        ]
    }
    render() {
        return (
            <React.Fragment>
                <section className="section" id="machineries">
                    <Container>
                        <SectionTitle
                            title1="Our"
                            title2="Machineries"
                            desc=""
                        />
                        <Row>
                            <Col lg={6}>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Model No</th>
                                            <th>Capacity</th>
                                       
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Concrete Batching Plant</td>
                                            <td>MB X 1500 Eurotec</td>
                                            <td>60 m³/ Hour</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Concrete Batching Plant</td>
                                            <td>CRP 450 1L4 (KYB Conmat)</td>
                                            <td>45 m³/ Hour</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>Mix Truck</td>
                                            <td>Ashok Leyland 2516</td>
                                            <td>7 m³</td>
                                         
                                        </tr>
                                        <tr>
                                            <td>Mix Truck</td>
                                            <td>Ashok Leyland 2518</td>
                                            <td>7 m³</td>
                                        
                                        </tr>
                                        <tr>
                                            <td>Concrete Pump</td>
                                            <td>Putzmeister-1407</td>
                                            <td>70 m³/hr</td>
                                        
                                        </tr>
                                        <tr>
                                            <td>Concrete Pump</td>
                                            <td>Schwing BP-1800</td>
                                            <td>70 m³/hr</td>
                                          
                                        </tr>
                                        <tr>
                                            <td>Concrete Pump</td>
                                            <td>Schwing SP-1400</td>
                                            <td>52 m³/hr</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Wheel Loader</td>
                                            <td>Liugong CLG-835</td>
                                            <td>2 m³</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Pick-Up </td>
                                            <td>Ashok Leyland Partnar</td>
                                            <td>1.5 Ton</td>
                                     
                                        </tr>
                                    </tbody>
                                </table>

                            </Col>
                            <Col lg={6}>
                                <MachinesSlider machines={this.state.machines} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Machineries;