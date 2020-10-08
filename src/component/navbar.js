import React, {Fragment} from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default function navbar() {
  return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" className='ml-5'>
            <img
              alt="logo"
              src="https://www.flaticon.com/svg/static/icons/svg/2904/2904253.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Covid-19 Live Tracking
          </Navbar.Brand>
        </Navbar>
    </Fragment>
  )
}