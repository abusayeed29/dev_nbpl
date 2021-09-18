import React, { Component } from 'react';
import {Link} from 'react-router-dom' 
class Banner extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-first "banner__img__section>
                <div className="banner__img">
                    <img src="images/section/h_bg.png" className="img-fluid" alt="images" />
                </div>
                <section className="banner-section s1" id="home">
                    <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                        <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                            {/* <span>Product </span> */}
                            <span className="cd-words-wrapper color-d4">
                            <b className="is-visible">Pavement Tiles!</b>
                            <b>Wall Tiles!</b>
                            <b>Ready Mix!</b>
                            </span>
                        </h1>
                        <p className="lt-sp03 mg-b60 text-white">
                           BE SURE . BUILD SURE .
                        </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            <div className="fl-btn btn-general btn-hv-border">
                                <Link to="#" className="border-corner5 f-w500 lt-sp095 text-white ">CONTACT US</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Banner;

