import React from 'react';
import ReactDOM from 'react-dom';

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

export {SectionWelcome};
