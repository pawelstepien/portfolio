import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from './grid.jsx';
import {NavBar, NavLink} from './navigation.jsx';

import {SectionWelcome} from './sections/welcome.jsx';
import {SectionAbout} from './sections/about.jsx';
import {SectionPortfolio} from './sections/portfolio.jsx';
import {SectionContact} from './sections/contact.jsx';

document.addEventListener("DOMContentLoaded", function(){

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container>
            <NavBar />
                <SectionWelcome id={0}>
                Welcome
                </SectionWelcome>
                <SectionAbout id={1}>
                About
                </SectionAbout>
                <SectionPortfolio id={2}>
                </SectionPortfolio>
                <SectionContact id={3}>
                Contact
                </SectionContact>
            </Container>
        )
    }
}

ReactDOM.render( <App />
    ,document.querySelector("#app"))

});
