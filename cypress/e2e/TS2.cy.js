import HomePage from "../page_objects/homePage";
import AccountPage from "../page_objects/homePage";
import CartPage from "../page_objects/cartPage";
import OrderPage from "../page_objects/orderPage";


describe('my first scenario', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();
    const cartPage = new CartPage();
    const orderPage = new OrderPage();

    it('should order a product from the shop', function() {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.clickGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOnBuyButton()
        orderPage.checkIfOrderIsPlacedCorrectly()


    })






})