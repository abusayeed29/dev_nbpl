import React, { Component } from 'react'

export default class Client extends Component {
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
                ,{
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
                },{
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
            <div id="c_clients" className="tf-modalbox-wrapper">
                <div className="tf-modal-content">
                    <section className="testimonial t2 s2 bg-s1 position-relative" id="clients">
                        <div className="background-right bg-cl2">
                            <div className="text-testimonial color-d17">Clients</div>
                        </div>
                        <div className="background-transparent bg-cl4"></div>
                        <div className="container d-lg-flex">                         
                            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="flat-spacer" data-desktop={4} data-mobile={0} data-smobile={0} />
                                <div className="wrap-box bg-white">
                                    {/* <div className="featured-post mg-b27"><img src="images/blog/11.jpg" alt="images" /></div> */}
                                    <div className="images-list justify-content-between bg-white">
                                        <div className="row">
                                        {
                                            this.state.images.map(data =>(
                                                <div className="col-4 img-box"><img className="img-fluid" src={data.image} alt={data.alt} key={data.id}/></div>
                                            ))
                                        }
                                        </div>
                                        
                                    </div>
                                    {/* <div className="quote"><img src="images/testimonial/09.png" alt="images" /></div> */}
                                </div>
                            </div>
                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                                <div className="flat-title t1">
                                    <h4 className="sub-title mg-b13">Clients</h4>
                                    <h2 className="title-section color-d12">Our Clients</h2>
                                </div>
                                <div className="slider-drop-apps custom-dot dot-s1 none-nav-default mg-dots-s3">
                                    {this.state.testimonial.map(data =>(
                                            <li>{data}</li>

                                    ))}
                                </div>
                            </div>
                        </div>               
                    </section>
                </div>
            </div>
        );
    }

}
