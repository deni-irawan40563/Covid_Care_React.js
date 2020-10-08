import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Corousel() {
  return (
    <div>
             <Carousel className="">
                <Carousel.Item>
                  <img
                    className="d-block corousel"
                    src="https://images.unsplash.com/photo-1594718238298-972f9e924493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    alt="First slide"
                  />
                  <Carousel.Caption className="shadow-lg">
                    <h1 className="mb-5">Indonesia</h1>
                    <Row>
                      <Col>
                        <h3>Total Terinfeksi</h3>
                        <p>132144</p>
                      </Col>
                      <Col>
                        <h3>Total Meninggal</h3>
                        <p>8768768</p>
                      </Col>
                      <Col>
                        <h3>Total Sembuh</h3>
                        <p>67864646332</p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  corousel"
                    src="https://images.unsplash.com/photo-1600408188262-39ddca7a51f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    alt="Third slide"
                  />

                  <Carousel.Caption className="shadow-lg">
                  <h1 className="mb-5">Dunia</h1>
                    <Row>
                      <Col>
                        <h3>Total Terinfeksi</h3>
                        <p>132144</p>
                      </Col>
                      <Col>
                        <h3>Total Meninggal</h3>
                        <p>8768768</p>
                      </Col>
                      <Col>
                        <h3>Total Sembuh</h3>
                        <p>67864646332</p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  corousel"
                    src="https://images.unsplash.com/photo-1587057329592-76587ad45df1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    alt="Third slide"
                  />

                  <Carousel.Caption className="shadow-lg">
                  <h1 className="mb-5">China</h1>
                    <Row>
                      <Col>
                        <h3>Total Terinfeksi</h3>
                        <p>132144</p>
                      </Col>
                      <Col>
                        <h3>Total Meninggal</h3>
                        <p>8768768</p>
                      </Col>
                      <Col>
                        <h3>Total Sembuh</h3>
                        <p>67864646332</p>
                      </Col>
                    </Row>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
    </div>
  )
}
