import React from 'react'

// Contacts should acccept a list of contacts

const Contacts = (props) => {

    let itemList = props.contactsList.map(contact => {

        return <div key={contact.id} > <h1> {contact.name} - {contact.city}, {contact.state} </h1></div>
    })

  return (
    <>
        {itemList}
    </>
  )
}

export default Contacts
