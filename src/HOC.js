import React, { Component } from 'react';


const HOC = (WrappedComponent) => {
    return class HOC extends Component {
        render(){
            return this.props.isLoading ? <h1>Loading ...</h1> : <WrappedComponent {...this.props}/>
        }
    }
}

export default HOC;