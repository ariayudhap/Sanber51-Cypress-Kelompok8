describe('Proceed to Checkout', () => {
  it('Checkout', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('#ui-id-5').trigger('mouseover');
    cy.get('#ui-id-17').trigger('mouseover');
    cy.get("#ui-id-19").click();
    cy.contains("Proteus Fitness Jackshirt").click();
    cy.get('#option-label-size-143-item-170').click();
    cy.get('#option-label-color-93-item-50').click();
    cy.get('#product-addtocart-button').click();
    cy.get('.message-success > div').should("contain.text", "You added Proteus Fitness Jackshirt to your");
    cy.contains('shopping cart').click();
    cy.wait(10000);
    cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click();
    cy.wait(12000);
    cy.get('#customer-email-fieldset > .required > .control > #customer-email').type('muhazka@gmail.com');
    cy.get('[name="shippingAddress.firstname"] > .label > span').type('Muhammad');
    cy.get('[name="shippingAddress.lastname"] > .label > span').type('Azka');
    cy.get('[name="shippingAddress.company"] > .label > span').type('MyComp');
    cy.get('[name="street[0]"]').type('Jalanku');
    cy.get('[name="shippingAddress.city"] > .label > span').type('California');
    const selectedRegion = 'California';
    cy.get('[name="region_id"]').select(selectedRegion);
    cy.get('[name="shippingAddress.postcode"] > .label > span').type('12345');
    const selectedCountry = 'United States';
    cy.get('[name="country_id"]').select(selectedCountry);
    cy.get('[name="shippingAddress.telephone"] > .label > span').type('02734671');
    cy.get(':nth-child(1) > :nth-child(1) > .radio').click();
    cy.get('.button > span').click();
    cy.get('#billing-address-same-as-shipping-checkmo').click();
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
    cy.get('.base').should("contain.text", "Thank you for your purchase!");
  })
})