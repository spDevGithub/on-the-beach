import { mount } from '@cypress/react'
import App from '../App'
import { hotelsCopy } from '../hotelCopyText/hotelsCopy'

it('lets the user see the hotel description on click', () => {
  mount(<App />)

  hotelsCopy.forEach((hotel, index) => {
    cy.get('div').contains(hotel.title)
    cy.get('button').contains('Read more about this hotel')
  })
})
