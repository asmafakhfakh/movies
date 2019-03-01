import React, { Component } from 'react';
import './App.css';
import List from './movieList'
import clap from './clap.png'
import StarRatingComponent from 'react-star-rating-component';
import {Container, Row, Col} from 'react-grid-system'
import Modal from 'react-responsive-modal';
import Add from './add'


import begin from './begin.jpg'
import belle from './belle.jpg'
import demain from './demain.jpg'
import bastardo from './bastardo.jpg'
import frontiere from './frontière.jpg'
import theeb from './theeb.jpg'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword:'',
      keyrate:1,
      open: false,
      moviesdata:[{image:begin, score:3, title:'Begin Agin - 2013'},
                  {image:belle, score:7, title:'La Belle et la Meute - 2017'},
                  {image:demain, score:7.4, title:'Demain Tout Commence - 2016'},
                  {image:bastardo, score:7.6, title:'Bastardo - 2013'},
                  {image:theeb, score:7.2, title:'Theeb - 2014'},
                  {image:frontiere, score:6.6, title:'Les Frontières du Ciel - 2015'}],
      filtred:[{image:begin, score:3, title:'Begin Agin - 2013'},
              {image:belle, score:7, title:'La Belle et la Meute - 2017'},
              {image:demain, score:7.4, title:'Demain Tout Commence - 2016'},
              {image:bastardo, score:7.6, title:'Bastardo - 2013'},
              {image:theeb, score:7.2, title:'Theeb - 2014'},
              {image:frontiere, score:6.6, title:'Les Frontières du Ciel - 2015'}],
      isLoading:true,
    }
  }


  handleChange=(event)=>{
    this.setState({keyword:event.target.value})
  }
  handleClick=()=>{
    this.setState({filtred:this.state.moviesdata.filter((el,i)=>el.title.toLowerCase().indexOf(this.state.keyword)>-1 && Math.round(el.score/2)>=this.state.keyrate)})
  }
  onStarrClick=(nextValue)=>{
    this.setState({keyrate: nextValue})
    this.setState({filtred:this.state.moviesdata.filter((el,i)=>Math.round(el.score/2)>=nextValue && el.title.toLowerCase().indexOf(this.state.keyword)>-1)})
  }


  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };


  addData(link, rating, name){
    let x=this.state.moviesdata.concat({image:link, score:rating, title:name})
    this.setState({moviesdata:x},this.handleClick)
    this.setState({ open: false })
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({isLoading:false})},2000)
  }


  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div className='navbar'>
          <div>
            <img alt='' src={clap} className='logo'/>
            <span className='name'>FECH TETFARREJ ?</span>
          </div>
          <div className='menu'>
            <a className='item' href='http://'>Home</a>
            <a className='item' href='http://'>Box Office</a>
            <a className='item' href='http://'>Awards</a>
            <a className='item' href='http://'>About Us</a>
          </div>
        </div>
        <Container>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <div className='search-bar'>
                <input type='text' className='search' placeholder='Serach for a movie by name' onChange={this.handleChange}/>
                <input type='button' className='submit' value='Search' onClick={this.handleClick}/>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12}>
              <div className="keyrate">
                <h4 className="rate-text">Search By Rating </h4>
                <StarRatingComponent
                  name="keyrate"
                  value={this.state.keyrate}
                  starCount={5}
                  onStarClick={this.onStarrClick}
                  emptyStarColor={'white'}
                  // renderStarIcon={() => <svg width="40" height="auto" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>}
                />
              </div>
            </Col>
            <Col lg={2} md={2} sm={12}>
              <input type='button' value='Add movie' className='addbutton' onClick={this.onOpenModal}/>
              <Modal open={open} onClose={this.onCloseModal} center>
                <Add setData={(link, rating, name)=>this.addData(link, rating, name)}/>
              </Modal>
            </Col>
          </Row>
        </Container>
        <List tab={this.state.filtred} isLoading={this.state.isLoading}/>        
      </div>
    );
  }
}

export default App;
