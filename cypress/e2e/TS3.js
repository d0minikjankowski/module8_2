import HomePage from "../page_objects/homePage"


describe("Podssstępne fixtury!", () => {
    //tu będą consty
    const homePage = new HomePage();


    before(function () {
        cy.fixture('products.json').as('ShopProducts')
    })
})

    it('Nienawidzimy ich Ssskarbie!', function () {
        //nazwapliku.nazwaMetody()
        homePage.visitPage()
        cy.visit("www.google.pl")

    })