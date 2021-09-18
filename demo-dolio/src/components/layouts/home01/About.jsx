import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: [
                {
                    id: 1,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/05.png',
                    alt: 'images',
                    name: 'Dribbble',
                    normal: 'Follow Me'
                },
                {
                    id: 2,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/06.png',
                    alt: 'images',
                    name: 'Behance',
                    normal: 'See My Design'
                },
                {
                    id: 3,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/07.png',
                    alt: 'images',
                    name: 'Uplabs',
                    normal: 'Download Here'
                },
                {
                    id: 4,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/08.png',
                    alt: 'images',
                    name: 'Skype',
                    normal: 'Connect with me'
                }
            ]
        }
    }
    render() {
        return (
            <div className="background-white">
                <div className="d-lg-flex">
                    <div className="col-left">
                        <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            <img src="images/section/03.png" alt="images"/>
                        </div>
                    </div>
                    <div className="col-right">
                        {/* <div className="flat-spacer" data-desktop="105" data-mobile="50" data-smobile="50"></div> */}
                        <div className="flat-title t1">
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                {/* <h4 className="sub-title mg-b22">About</h4> */}
                                <h2 className="title-section mg-b26 color-d12">About<span className="color-d4"> Us</span></h2>
                                <p>NAVANA Building Products Limited is one of the sister concerns of NAVANA Group which is producing fully computer generated best quality concrete for various greats situated near the river Buriganga at Dipanagar, Gabtoli, Dhaka. Total land area of the Project is about 136, 800 Sft. out of which 108,000 Sft. land is used for concrete production, aggregate storage, sub-station, workshop facilities, laboratory, office accommodation, residence etc. Remaining 28,800 Sft. land is used for 2 Nos. crushing plant. An all equipped concrete laboratory is established in the NBPL premises. Trial Mix for various grades of concretes including coarse and fine aggregate, cement is conducted in NBPL laboratory. Cylinder and cubes are taken from every transit Mixer for testing workability of 7 days and 28 days compressive strength. Cylinders and cubes are tested in either BRTD, BUET or in our laboratory. For the satisfactory proportioning of the concrete ingredients, the following methods of concrete mix design are used in our laboratory.<br/>
                                    a) American Concrete Institute Method of Mix Design (ACI- 211.10-1991) <br/>
                                    b) Road Note No. 4 Method, currently known as DOE (Department of Environment, UK) Method of Concrete Mix Design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-list">
                    <div className="flat-carousel-box data-effect clearfix" data-gap="30" data-column="4" data-column2="3" data-column3="2" data-column4="1" data-column5="1" data-dots="false" data-auto="false" data-nav="false" data-loop="true">
                        <div className="owl-carousel">
                            {
                                this.state.profile.map(data => (
                                    <div className={data.classname} key={data.id}>
                                        <div className="featured-post">
                                            <img src={data.images} alt={data.alt}/>
                                        </div>
                                        <div className="content-inside">
                                            <h3 className="name"><Link to="#">{data.name}</Link></h3>
                                            <span className="t-normal">{data.normal}</span>
                                        </div>
                                    </div>    
                                ))
                            }                                                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
