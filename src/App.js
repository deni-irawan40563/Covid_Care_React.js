import React from 'react';
import Navbar from './component/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Corousel from './component/Corousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './App.css'
function App() {
  return (
    <div className="bg-black">
      <header>
          <Navbar />
            <Row className="justify-content-md-center">
              <Col lg="12" className="hero-image">
                <Corousel />
              </Col>
            </Row>
      </header>
    </div>
  );
}

export default App;
