import HomePage from "../page_objects/homePage";
import CartPage from "../page_objects/cartPage";
import OrderPage from "../page_objects/orderPage";

const zobaczKoszyk = '.added_to_cart.wc-forward'


describe('my first scenario', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    before(function () {
        cy.fixture('products.json').as('ShopProducts')
    })

    it('should order a product from the shop', function() {
        homePage.visitPage()
        homePage.addProductToCart(this.ShopProducts.HoodieWithZipper)
        homePage.addProductToCart(this.ShopProducts.Polo)
        homePage.addProductToCart(this.ShopProducts.Sunglasses)
        cy.get(zobaczKoszyk, { timeout: 10000 }).eq(2).should('be.visible')
        homePage.goToCartFromProductPage()
        cartPage.checkThatAddedProductIsInCart(this.ShopProducts.HoodieWithZipper)
        cartPage.checkThatAddedProductIsInCart(this.ShopProducts.Polo)
        cartPage.checkThatAddedProductIsInCart(this.ShopProducts.Sunglasses)
        cartPage.clickGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOnBuyButton()
        orderPage.checkIfOrderIsPlacedCorrectly()


    })
})