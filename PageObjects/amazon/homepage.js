function getData() {
  return require("../../externalTestData/searchAmazonItem.json");
}

var amazon = {
  searchItem: function () {
    this.api.pause(1000);
    var searchItem = getData();
    return this.waitForElementVisible("@logo", 1000)
      .setValue("@searchBox", searchItem.item)
      .click("@searchBtn")
      .pause(2000);
  },
  validatePrice: function () {
    this.api.pause(1000);
    return this.waitForElementVisible("@logo", 1000)
      .assert.visible("@itemResultPos")
      .assert.visible('@itemPrice')
      .getText('@itemPrice', function(result){
        this.globals.priceItem = result.value.trim().replace("\n", ".");
      })
      .click("@itemResultPos")
      .waitForElementVisible('@productTitle')
      .getText('@detailPrice', function(result){
        this.globals.detailPrice = result.value.trim().replace("\n", ".");
        console.log("item price ", browser.globals.priceItem)
        console.log("detail item price ", browser.globals.detailPrice)
        browser.assert.equal(browser.globals.priceItem, browser.globals.detailPrice)
      })
      .click("@addCartBtn")
      .waitForElementVisible('@confirmationMessage')
      .click("@cartNav")
      .waitForElementVisible('@cartPrice')
      .getText('@cartPrice', function(result){
        this.globals.cartPriice = result.value.trim().replace("\n", ".");
        browser.assert.equal(browser.globals.priceItem, browser.globals.cartPriice)
      })
      .pause(2000);
  },
  deleteItem: function () {
    this.api.pause(1000);
    return this.waitForElementVisible("@logo", 1000)
    .click("@deleteItem")
    .assert.textContains('@totalCartAmount', '0.00')
    .pasue(2000);
  },
};

module.exports = {
  commands: [amazon],
  url: "https://www.amazon.com.mx",
  elements: {
    logo: {
      selector: "#nav-logo",
    },
    searchBox: {
      selector: "#twotabsearchtextbox",
    },
    searchBtn: {
      selector: "#nav-search-submit-button",
    },
    itemResultPos: {
      selector: "div[data-csa-c-pos='1']",
    },
    itemPrice: {
      selector: "//div[@data-csa-c-pos=1]//div[@class='a-row a-size-base a-color-base']",
      locateStrategy: 'xpath'
    },
    productTitle:{
        selector: '#productTitle'
    },
    detailPrice: {
      selector: 'span.apexPriceToPay',
    },
    addCartBtn: {
      selector: "//input[@id='add-to-cart-button']",
      locateStrategy: 'xpath'
    },
    confirmationMessage:{
      selector: '#sw-atc-confirmation'
    },
    cartNav: {
      selector: "#nav-cart",
    },
    cartProductTitle: {
      selector: 'span.a-truncate.a-size-medium'
    },
    cartPrice: {
      selector: "//div[@class='a-row a-spacing-base a-spacing-top-base sc-list-item-content-container']/div[@class='a-column a-span2 a-text-right sc-item-right-col a-span-last']",
      locateStrategy: 'xpath',
    },
    deleteItem: { 
        selector: "//input[data-action='delete']",
        locateStrategy: 'xpath'
    },
    totalCartAmount : {
        selector: '//span[@id="sc-subtotal-amount-activecart"]/span',
        locateStrategy: 'xpath'
    }
  },
};
