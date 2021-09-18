import React, { Component } from 'react';
import { Media } from "reactstrap";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MachineBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        }
    }
    
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <React.Fragment>
                <Slider {...settings}
                >
                {
                    this.props.machines.map((machine, key) =>
                        <div key={key} className="item">
                            <div className="testi-content m-3 position-relative">
                                <div className="testi-user mt-4">
                                    <Media className="media align-items-center">
                                        <img src={machine.image} alt="" className="mr-3 img-fluid d-block"/>
                                    </Media>
                                </div>
                            </div>
                        </div>
                    )
                } 
                </Slider>
            </React.Fragment>
        );
    }
}

export default MachineBox;