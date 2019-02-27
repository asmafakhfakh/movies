import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            rating:0,
            link:'',
            modal:true
        }
    }
    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    }
    handleRatingChange=(event)=>{
        this.setState({rating:event.target.value})
    }
    handleLinkChange=(event)=>{
        this.setState({link:event.target.value})
    }
    handleclick=()=>{
        this.props.setData(this.state.link, this.state.rating, this.state.name)
    }
    render() { 
        return ( <div>
            <h2>Add a movie</h2>
            <h4>Movie name</h4>
            <input type='text' onChange={this.handleNameChange}/>
            <h4>IMDb rating {this.state.rating}</h4>
            <input type='number' min="1" max="10" onChange={this.handleRatingChange}/>
            <h4>Poster link</h4>
            <input type='text' onChange={this.handleLinkChange}/><br/>
            <input type='button' value='Submit' onClick={this.handleclick}/>
        </div> );
    }
}
 
export default Add;