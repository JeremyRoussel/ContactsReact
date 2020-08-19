import React, { Component } from 'react'
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'


// Header should accept a function in props
// that allows it to setState in the parent to allow filtering

class Header extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateFilter(this.refs.search.value)
  
  }


  render(){
    return (
      <>
        <Navbar className="justify-content-center" bg="dark" variant="dark">
          <Navbar.Brand>Contacts App</Navbar.Brand>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Form inline onSubmit={this.handleSubmit} >
            <FormControl ref="search" type="text" placeholder="Search" className="mr-sm-2" />
            <Button type="submit" variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
    )
  }
}

export default Header
