import React from 'react';
import ReactDOM from 'react-dom';

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

export {SectionAbout};
