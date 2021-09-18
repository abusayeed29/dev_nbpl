import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class EquipmentRight extends Component {
    constructor(props){
        super(props);
        this.state = {
            skill: [
                {
                    id: 1,
                    timeline: 'timeline-inverted color1',
                    info: 'Universite of Udacity',
                    title: 'User Experience Design',
                    text: 'User experience (UX) design is the process design teams use to create products. '
                },
                {
                    id: 2,
                    timeline: 'timeline-inverted color2',
                    info: 'Udemy',
                    title: 'Interaction Design',
                    text: 'User experience (UX) design is the process design teams use to create products. '
                },
                {
                    id: 3,
                    timeline: 'timeline-inverted color3',
                    info: 'Skill Share',
                    title: 'Interaction Design',
                    text: 'User experience (UX) design is the process design teams use to create products. '
                }
            ]
        }
    }
    render() {
        return (
            <div className="col-right">
                <div className="flat-spacer" data-desktop={0} data-mobile={70} data-smobile={70} />
                <div className="flat-title t1 animate-element wow delay5 fadeInDown">
                    <h4 className="sub-title mg-b13">Equipment:</h4>
                    <h2 className="title-section color-d12">Lab Equipment</h2>
                </div>
                <div className="timelines position-relative animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                    <ol class="list-group list-group-flush list-group-numbered ">
                            <li class="list-group-item list-group-item-c">1.	Sieve Analysis Set (C.A & F.A)</li>
                            <li class="list-group-item list-group-item-c">2.	Compression Testing Machine</li>
                            <li class="list-group-item list-group-item-c">3.	Concrete Mixer Machine</li>
                            <li class="list-group-item list-group-item-c">4.	Dry Rodded Density Mold</li>
                            <li class="list-group-item list-group-item-c">5.	Los Angeles Abrasion Testing Machine</li>
                            <li class="list-group-item list-group-item-c">6.	ACV Mold Set</li>
                            <li class="list-group-item list-group-item-c">7.	Drying Oven - 50 Liter Capacity</li>
                            <li class="list-group-item list-group-item-c">8.	Cylinder Mold</li>
                            <li class="list-group-item list-group-item-c">9.	Flakiness Index & Elongation Index Set</li>
                            <li class="list-group-item list-group-item-c">10.	Slump Cone</li>
                            <li class="list-group-item list-group-item-c">11.	Sp. Gravity, Water Absorption & Moisture Testing Apparatus</li>
                            <li class="list-group-item list-group-item-c">12.	Vicat Apparatus</li>
                            <li class="list-group-item list-group-item-c">13.	Concrete Thermometer</li>
                            <li class="list-group-item list-group-item-c">14.	Digital Weight Balance</li>
                            <li class="list-group-item list-group-item-c">15.	And others necessary equipment.</li>

                    </ol>
                </div>
            </div>
        );
    }
}

export default EquipmentRight;
