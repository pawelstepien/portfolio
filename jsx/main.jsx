import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

let scroll = Scroll.animateScroll;

document.addEventListener("DOMContentLoaded", function(){

class Container extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = "container">
                {this.props.children}
            </div>
        )
    }
}

class Row extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = "row">
                {this.props.children}
            </div>
        )
    }
}

class Col extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let colSize = "col-" + this.props.size;
        return (
            <div className={colSize}>
                {this.props.children}
            </div>
        )
    }
}

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    scrollTo(e){
        let sectionPosition = document.querySelector("section[data-sectionid='" + e.currentTarget.dataset.sectionid + "']").getBoundingClientRect();
        scroll.scrollMore(sectionPosition.top);
    }
    hamburgerCollapse(){
        document.querySelector(".navBar .links").classList.add("hidden");
        document.querySelector(".navBar .hamburger").classList.remove("hidden");
    }
    hamburgerExpand(){
        document.querySelector(".navBar .links").classList.remove("hidden");
        document.querySelector(".navBar .hamburger").classList.add("hidden");
    }
    responsiveMenu(){
        const resposiveMenuEvent = window.addEventListener("resize", (event)=>{
            if(window.innerWidth>=640){
                    this.hamburgerExpand();
            }else{
                this.hamburgerCollapse();
            }
            console.log(event);
        });
    }
    hamburgerClick(){
        document.querySelector(".navBar .links").classList.toggle("hidden");
    }
    componentDidMount(){
        if(window.innerWidth>=640){
                this.hamburgerExpand();
        }
        this.responsiveMenu();
    }
    render(){

        return (
            <nav className="navBar">
                <figure onClick={this.hamburgerClick}>
                    <img src="./img/navigation/hamburger.png" className="hamburger" width="60px" height="60px"/>
                </figure>
                <ul className="links hidden">
                    <li className="welcomeLink" onClick={this.scrollTo} data-sectionid={0}>Welcome</li>
                    <li className="aboutLink" onClick={this.scrollTo} data-sectionid={1}>About me</li>
                    <li className="portfolioLink" onClick={this.scrollTo} data-sectionid={2}>Portfolio</li>
                    <li className="contactLink" onClick={this.scrollTo} data-sectionid={3}>Contact</li>
                </ul>
            </nav>
        )
    }
}

class SectionWelcome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section className="welcome" data-sectionid={this.props.id}>
                {this.props.children}
            </section>
        )
    }
}

class SectionAbout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section className="about" data-sectionid={this.props.id}>
                {this.props.children}
            </section>
        )
    }
}

class SectionPortfolio extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section className="portfolio" data-sectionid={this.props.id}>
                {this.props.children}
            </section>
        )
    }
}

class SectionContact extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <section className="contact" data-sectionid={this.props.id}>
                {this.props.children}
            </section>
        )
    }
}


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
                Portfolio
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
