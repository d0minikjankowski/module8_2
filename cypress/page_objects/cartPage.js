const productName = '.product-name'
const removeItemButton = '.remove'
const emptyCartAlert = '.cart-empty.woocommerce-info'
const clickGoToPaymentsButton = '.wc-proceed-to-checkout'

class CartPage{

checkThatAddedProductIsInCart(product) {
    cy.get(productName).contains(product.Name).should('exist');
}

    removeItemFromCart() {
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist')
    }

    clickGoToPaymentsButton() {
        cy.get(clickGoToPaymentsButton).click()

    }

}

export default CartPage;