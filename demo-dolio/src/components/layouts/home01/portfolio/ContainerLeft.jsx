import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ContainerLeft extends Component {
    render() {
        return (
            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                <div className="flat-title t1">
                    <h2 className="title-section color-d12 mg-b34">Machineries</h2>
                    <div className="description">
                    <div>
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Model No</th>
                                <th>Capacity</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Concrete Batching Plant</td>
                                    <td>MB X 1500 Eurotec</td>
                                    <td>60 m³/ Hour</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Concrete Batching Plant</td>
                                    <td>CRP 450 1L4 (KYB Conmat)</td>
                                    <td>45 m³/ Hour</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Mix Truck</td>
                                    <td>Ashok Leyland 2516</td>
                                    <td>7 m³</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td>Mix Truck</td>
                                    <td>Ashok Leyland 2518</td>
                                    <td>7 m³</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>Concrete Pump</td>
                                    <td>Putzmeister-1407</td>
                                    <td>70 m³/hr</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Concrete Pump</td>
                                    <td>Schwing BP-1800</td>
                                    <td>70 m³/hr</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Concrete Pump</td>
                                    <td>Schwing SP-1400</td>
                                    <td>52 m³/hr</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Wheel Loader</td>
                                    <td>Liugong CLG-835</td>
                                    <td>2 m³</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Pick-Up </td>
                                    <td>Ashok Leyland Partnar</td>
                                    <td>1.5 Ton</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

export default ContainerLeft;
