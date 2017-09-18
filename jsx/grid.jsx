import React from 'react';

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

export {Container};
export {Row};
export {Col};
