import HomePage from "../page_objects/homePage";
import AccountPage from "../page_objects/homePage";
import CartPage from "../page_objects/cartPage";
import OrderPage from "../page_objects/orderPage";


describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();
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
        homePage.clickGoToCartFromProductButton()
        cartPage.clickGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOnBuyButton()
        orderPage.checkIfOrderIsPlacedCorrectly()


    })






})