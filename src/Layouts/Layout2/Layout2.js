import React, { Component, Suspense } from 'react';

const NavbarPage = React.lazy(() => import('../../components/Navbar/Navbar_Page'));
const Section = React.lazy(() => import('./Section'));
const Service = React.lazy(() => import('../../components/Service/service'));
const About = React.lazy(() => import('../../components/About/about'));
const Feature = React.lazy(() => import('../../components/Features/feature'));
const Counter = React.lazy(() => import('../../components/Counter/counter'));
const Clients = React.lazy(() => import('../../components/Clients/Clients'));
const GetInTouch = React.lazy(() => import('../../components/GetInTouch/GetInTouch'));
const Subscribe = React.lazy(() => import('../../components/Subscribe/Subscribe'));
const Footer = React.lazy(() => import('../../components/Footer/footer'));
const Quality = React.lazy(() => import('../../components/Quality/quality'));
const ClientList = React.lazy(() => import('../../components/Clients/ClientList'));
const Machineries = React.lazy(() => import('../../components/Machinaries/machineries'));
const Messages = React.lazy(() => import('../../components/Clients/Messages'));
 
class Layout2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                // { id: 2 , idnm : "services", navheading: "Services" },
                { id: 3 , idnm : "about", navheading: "About" },
                { id: 4 , idnm : "features", navheading: "Products" },
                { id: 5 , idnm : "clients", navheading: "Clients" },
                { id: 6 , idnm : "machineries", navheading: "Machineries" },
            ],
            pos : document.documentElement.scrollTop,
            imglight : true,
            navClass : "navbar-light"
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "navbar-light nav-sticky", imglight : false});
        }
        else
        {
            this.setState({navClass : "navbar-light", imglight : true});
        }
    };

    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >

                    {/* Importing Navbar */}
                    <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} isLight={true} />

                    {/* Importing section */}
                    <Section/>

                    {/* Importing service */}
                    {/* <Service/> */}
                    {/* Importing about us */}  
                    <About/>

                     {/* Importing clients */}
                     <Messages/>

                    {/* Importing Quality */}  
                    <Quality/>

                    {/* Importing feature */}
                    <Feature/>

                    {/* Importing counter */}
                    <Counter/>

                    {/* Importing clients */}
                    {/* <Clients/> */}

                    <ClientList/>
                    
                    <Machineries/>

                    {/* Importing get in touch */}
                    {/* <GetInTouch/> */}

                    {/* Importing footer */}
                    <Footer/>
                </Suspense>

            </React.Fragment>
        );
    }
}

export default Layout2;