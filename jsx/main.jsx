import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

let scroll = Scroll.animateScroll;

const portfolioData = [
    {header: "Tetris", imgUrl: "./img/portfolio/tetris/screen.png", description: "Gra Tetris. Użyte technologie: JavaScript ES6, Canvas, Firebase.", url: "https://pawelstepien.github.io/Tetris/"},
    {header: "Sit on Chair", imgUrl: "./img/portfolio/sitonchair/screen.png", description: "Pierwszy większy projekt wykonany na podstawie pliku .psd. Użyte technologie: HTML, CSS, JavaScript.", url: "https://pawelstepien.github.io/Sit-on-chair-v2.0/"},
    {header: "Bezpieczny Bank", imgUrl: "./img/portfolio/bezpiecznybank/screen.png", description: "Projekt wykonany podstawie pliku .psd.", url: "https://pawelstepien.github.io/Bezpieczny-Bank/"}
]

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
//create link component
        return (
            <nav className="navBar">
                <figure onClick={this.hamburgerClick}>
                    <img src="./img/navigation/hamburger2.png" className="hamburger" width="60px" height="60px"/>
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
class Slider extends React.Component{
    constructor(props){
        super(props);
        this.counter = 0;
        this.state={
            counter: 0
        }
    }
    previousHandle(event){
        event.preventDefault();
        if(this.state.counter <= 0){
            this.setState({counter: portfolioData.length - 1});
        }else{
            this.setState((state) => ({counter: state.counter - 1}));
        }
    }
    nextHandle(event){
        event.preventDefault();
        if(this.state.counter >= portfolioData.length - 1){
            this.setState({counter: 0});
        }else{
            this.setState((state) => ({counter: state.counter + 1}));
        }
    }
    render(){
        return(
            <div className="portfolio__slider">
                <a href="#" className="portfolio__slider--previousLink" onClick={this.previousHandle.bind(this)}>
                    <img src="./img/portfolio/arrow-white.png" className="portfolio__slider--previous"/>
                </a>
                    <article className="portfolio__slider--currentProject">
                        <h3 className="portfolio__slider--header">{portfolioData[this.state.counter].header}</h3>
                        <figure className="portfolio__slider--imagewrap">
                            <a href={portfolioData[this.state.counter].url}>
                                <img src={portfolioData[this.state.counter].imgUrl} className="portfolio__slider--image"/>
                            </a>
                        </figure>
                        <p className="portfolio__slider--description">{portfolioData[this.state.counter].description}</p>
                    </article>
                <a href="#" className="portfolio__slider--previousLink" onClick={this.nextHandle.bind(this)}>
                    <img src="./img/portfolio/arrow-white.png" className="portfolio__slider--next"/>
                </a>
            </div>
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
                <Slider />
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
