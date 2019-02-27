import React, { Component } from 'react';
import Movie from './movieCard'
import {Container, Row, Col} from 'react-grid-system'


class List extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    handleclick=()=>{
        alert('clicked')
    }

    render() { 
        return ( <div>
            <Container>
                <Row>
                    {
                        this.props.tab.map((el,i)=><Col lg={3} md={4} sm={6}> <Movie key={i} item={el}/> </Col>)
                    }
                </Row>
            </Container>
        </div> );
    }
}
 
export default List;