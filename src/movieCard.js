import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

//var Rating = require('react-rating');

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { rating: 1 }
    }
    onStarrClick=(nextValue)=>{
        this.setState({rating: nextValue});
      }
    render() { 
        const {item}=this.props
        return ( <div className="movie-card">
            
            <img className="poster" src={item.image} alt="" />
            <div className="title">
                {item.title}<br/>
                <StarRatingComponent
                    className="rating" 
                    name="rate" 
                    value={Math.round(item.score/2)}
                    starCount={5}
                    emptyStarColor={'white'}
                />
            </div>
        </div> );
    }
}
 
export default Movie;