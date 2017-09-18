import React from 'react';
import ReactDOM from 'react-dom';
import {portfolioData} from './portfoliodata.jsx';

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
                            <a href={portfolioData[this.state.counter].url} target="_blank">
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

export {SectionPortfolio};
