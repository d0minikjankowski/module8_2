import Urls from "./urls";

    const myAccountHeaderButton = '#menu-item-100'
    const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
    const checkCartFromProductLevel = '.added_to_cart.wc-forward'
    const cartContent = '.woocommerce-Price-amount.amount'



    class HomePage{

        clickMyAccountHeaderButton() {
            cy.get(myAccountHeaderButton).click()
        }

        addProductToCart(HoodieWithZipper) {
            cy.get(dataBlockNameNew).within(()=> {
            cy.get(HoodieWithZipper.Locator).click()
            })
        }

        addProductToCart(Polo) {
            cy.get(dataBlockNameNew).within(()=> {
            cy.get(Polo.Locator).click()
            })
        }

        addProductToCart(Sunglasses) {
            cy.get(dataBlockNameNew).within(()=> {
            cy.get(Sunglasses.Locator).click()
            })
        }

        clickGoToCartFromProductButton() {
            cy.get(dataBlockNameNew).within(()=> {
                cy.get(checkCartFromProductLevel).click()
            })
        }

        goToCartFromProductPage() {
            cy.get(cartContent).eq(0).click()
        }


        visitPage() {
            const urls = new Urls
            urls.visitHomePage()
        }
    }

    export default HomePage;