import React, { Component } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import {Container, Row, Col, Button} from 'react-bootstrap'
import ContactForm from './components/ContactForm'
import { v1 as uuidv1 } from 'uuid';
import Contacts from './components/Contacts'

// Main Container for App, will hold state and initialize values

class App extends Component {

  // initialize values in construction
  constructor() {
    super();

    this.state = {
      contacts : [],
      filter : ""
    }

    // set empty contact info to potentially pass to form for autofill
    this.empty = {
      id: "",
      name: "Your Name",
      email: "Your Email",
      phoneNumber: "5555555555",
      address: "Street Adress",
      city: "City",
      state: "TX",
      zip: 55555
    }
  }

  // add values to state when compnent is first loaded
  componentDidMount = () => {

    this.setState({
      contacts : [
        {id: uuidv1(),
        name: "Jeremy Roussel",
        email: "jeremyroussel@hey.com",
        phoneNumber: "8326938121",
        address: "5503 Caspian Falls Ln",
        city: "Fulshear",
        state: "TX",
        zip: 77441}
      ]
    })

  }

  // function to add new contact
  addContact = (contact) => {
    // copy current state into new memory address (pass by value), then add new contact
    let newContacts = [...this.state.contacts]
    newContacts.push(contact)

    //update state with react setState function
    this.setState({
      contacts: newContacts
    })
  }


  // Function to update filter of contacts, will be passed to Header components
  updateFilter = (search) => {

    this.setState({
      filter: search
    })

  }

  render() {

    // Alpha sorting of list elements
    let alphaList = this.state.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1)

    // Filtering of list elements
    let contactsList = alphaList.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })

    return (
      <>
        {/* Include Header and pass filter function to search box */}
        <Header updateFilter={this.updateFilter}/>

        <Container fluid style={{textAlign: "center"}}>

          <Row style={{height: "100vh", overflow: "hidden"}}>
            <Col xs={12} md={4} style={{backgroundColor: "lightslategrey"}} xs={{order: "last"}}>
              <Container fluid> <h1>Add a Contact</h1> 
              {/* Include Contact Form, passing in function to add new contact */}
              <ContactForm addContact={this.addContact} />
              </Container>
            </Col>
            <Col xs={12} md={8} >

                {/* Include contents programmatically, pass list of sorted, alpha elements */}
                <Contacts contactsList={contactsList} />
              
            </Col>
          </Row>

    

        </Container>
        
        <Footer />
      </>
    )
  }
}

export default App
