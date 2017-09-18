import React from 'react';
import ReactDOM from 'react-dom';

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

export {SectionContact};
