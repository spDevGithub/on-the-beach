import { mount } from '@cypress/react'
import App from '../../src/App'
import { hotelsCopy } from '../../src/hotelCopyText/hotelsCopy'

describe('Hotel cards', () => {
  it('lets the user see the hotel description on click', () => {
    mount(<App />)

    cy.get('div').contains(hotelsCopy[0].title)

    cy.get('button').contains('Read more about this hotel')

    cy.get('button').contains('Read more about this hotel').eq(0).click()

    cy.get('button').contains('Read less about this hotel')

    cy.get('div').contains('Placeholder description')
  })
})
