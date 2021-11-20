import React, { Component } from 'react';
import "./AdminPresent.css"
import { Container, Row, Col } from 'react-grid-system';

import Slides from "../../components/AdminSlides/Slides"
import QA from "../../components/AdminSlides/QA"


class AdminPresent extends Component {
  
  constructor() {
    super(); 
  this.state = { showSlides: true, showQA: false }
  }

  _showSlides = (bool) => {
    this.setState({
      showSlides: true,
      showQA: false
    });
  }

  _showQA = (bool) => {
    this.setState({
      showSlides: false,
      showQA: true
    });
  }

  render() {
    return (      
    <Container fluid>
      <Row>
        <Col xs={8}>
          <button className="tabBtn" onClick={this._showSlides.bind(null, true, false)}>Slides</button>
        <button className="tabBtn" onClick={this._showQA.bind(null, false, true)}>Q&A</button>
        </Col>
        <Col xs={4}>
        <iframe className="spotify" src="https://open.spotify.com/embed/album/2wcv0lHk5fUYyNGKugGa7q?utm_source=generator" width="50%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </Col>
      </Row>
      <Row className="slidesWrapper" justify="around">
      { this.state.showSlides && (<Slides/>) }
      { this.state.showQA && (<QA/>) }
      </Row>

    </Container>
    );
  }
}
 
export default AdminPresent;