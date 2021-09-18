import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Design, NumberCount} from './specilizing/index';

class Specilizing extends Component {
    constructor(props){
        super(props);
        this.state = {
            design : [
                {
                    id: 1,
                    iconbox: 'iconbox-s1 d-sm-flex align-items-center',
                    iconcolor: 'iconbox-icon color1',
                    spanicon: 'icon-designer',
                    title: 'Raw Materials for RMC',
                    text01: ['Cement', '20 mm downgraded stone chips', '12 mm downgraded stone chips', 'Sylhet sand',
                        'Super Plasticizer Admixture',
                        'Waterproofing Admixture',
                        'Potable Water'
                        ],
                    text02: 'experience. My main focus is on listening.'
                },
                {
                    id: 2,
                    iconbox: 'iconbox-s1 d-sm-flex justify-content-lg-center align-items-center mgl-iconbox-s1',
                    iconcolor: 'iconbox-icon color2 color1',
                    spanicon: 'icon-designer',
                    title: 'Raw Materials for Pavement Tiles',
                    text01: ['Cement', '12 mm downgraded stone chips','Sylhet sand', 'Admixture', 'Oxide' ],
                    text02: 'experience. My main focus is on listening.'
                }
            ]
        }
    }
    render() {
        return (
            <div className="section slide-personal-Intro-third slide-dark bg-white">
                
                <section className="flat-case-study s3" id="services">
                    <div className="container">
                        <div className="flat-title">
                            {/* <h2 className="title-section color-d12 animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">Products</h2> */}
                        </div>
                        <div className="d-md-flex">
                            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="flat-title t2 mg-b60">
                                    <h4 className="sub-title mg-b13">Products</h4>
                                    <h2 className="title-section color-d12 mg-b20">Raw Materials for RMC</h2>
                                    <p>
                                        <li>Cement</li>
                                        <li>20 mm downgraded stone chips</li>
                                        <li>12 mm downgraded stone chips</li>
                                        <li>Sylhet sand</li>
                                        <li>Super Plasticizer Admixture</li>
                                        <li>Waterproofing Admixture</li>
                                        <li>Potable Water</li>
                                    </p>
                                </div>
                                <div className="image-link t1">
                                    <div className="featured-post">
                                        <Link to="#"><img src="images/section/41.jpg" alt="images" /></Link>
                                    </div>
                                </div>
                            </div>

                            

                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                
                                <div className="pd-right">
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <Link to="#"><img src="images/section/42.jpg" alt="images" /></Link>
                                        </div>
                                    </div>
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <Link to="#"><img src="images/section/43.jpg" alt="images" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-md-flex">
                            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="flat-title t2 mg-b60">
                                    <h4 className="sub-title mg-b13">Products</h4>
                                    <h2 className="title-section color-d12 mg-b20">Raw Materials for Pavement Tiles</h2>
                                    <p>

                                        <li>Cement</li>
                                        <li>12 mm downgraded stone chips</li>
                                        <li>Sylhet sand</li>
                                        <li>Admixture</li>
                                        <li>Oxide</li>
                                    </p>
                                </div>
                                <div className="image-link t1">
                                    <div className="featured-post">
                                        <Link to="#"><img src="images/section/41.jpg" alt="images" /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />

                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                
                                <div className="pd-right">
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <Link to="#"><img src="images/section/42.jpg" alt="images" /></Link>
                                        </div>
                                    </div>
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <Link to="#"><img src="images/section/43.jpg" alt="images" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        );
    }
}

export default Specilizing;
