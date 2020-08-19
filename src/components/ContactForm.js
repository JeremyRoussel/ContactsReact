import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import { v1 as uuidv1 } from 'uuid';

// Contact Form will be passed a function to update the list of contacts


class ContactForm extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();

        let contact = {
            id: uuidv1(),
            name: this.refs.name.value,
            email: this.refs.email.value,
            phoneNumber: this.refs.phoneNumber.value,
            address: this.refs.address.value,
            city: this.refs.city.value,
            state: this.refs.state.value,
            zip: this.refs.zip.value
        }

        this.props.addContact(contact)

    }
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
            
            <Form.Group >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" ref="name" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" ref="email" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Phone Number</Form.Label>
                <Form.Check type="text" placeholder="555-555-5555" ref="phoneNumber" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" ref="address" />
            </Form.Group>

            <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" ref="city" />
            </Form.Group>

            <Form.Group >
                <Form.Label>State</Form.Label>
                <Form.Check type="text" placeholder="TX" ref="state" />
            </Form.Group>

            <Form.Group >
                <Form.Label>Zip</Form.Label>
                <Form.Check type="number" placeholder="55555" ref="zip" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </>
    )
  }
}

export default ContactForm
