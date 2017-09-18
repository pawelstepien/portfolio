import React from 'react';
import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

let scroll = Scroll.animateScroll;

class NavLink extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li onClick={this.props.scrollTo} data-sectionid={this.props.sectionId}>
                {this.props.children}
            </li>
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
                    <img src="./img/navigation/hamburger2.png" className="hamburger" width="60px" height="60px"/>
                </figure>
                <ul className="links hidden">
                    <NavLink scrollTo={this.scrollTo.bind(this)} sectionId={0}>Welcome</NavLink>
                    <NavLink scrollTo={this.scrollTo.bind(this)} sectionId={1}>About me</NavLink>
                    <NavLink scrollTo={this.scrollTo.bind(this)} sectionId={2}>Portfolio</NavLink>
                    <NavLink scrollTo={this.scrollTo.bind(this)} sectionId={3}>Contact</NavLink>
                </ul>
            </nav>
        )
    }
}
 export {NavBar, NavLink};
