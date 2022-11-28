function getData() {
  return require("../../externalTestData/searchDataInput.json");
}

var unosquare = {
  blogUnosquare: function () {
    this.api.pause(1000);
    return this.waitForElementVisible("@unosquareLogo", 1000)
      .click('@blogMenu')
      .assert.textContains("@blogHeader", "DIGITAL TRANSFORMATION BLOG")
      .assert.urlEquals("https://blog.unosquare.com/")
      .assert.visible("@recentPost")
      .assert.visible("@sectionRecentPost")
      .assert.visible("@popularPost")
      .click("@popularPost")
      .assert.visible("@sectionPopularPost")
      .pause(2000);
  },
  searchQAInBlog: function () {
    this.api.pause(1000);
    const data = getData();
    return this.waitForElementVisible("@unosquareLogo", 1000)
      //.click('@blogMenu')
      .waitForElementVisible("@blogHeader")
      .setValue("@inputSearchBlog", data.searchWord1)
      .click("@searchBtn")
      .waitForElementVisible("@searchBlogHeader")
      .pause(2000);
  },
  searchDevelopment: function () {
    this.api.pause(1000);
    const data = getData();
    return this.waitForElementVisible("@unosquareLogo", 1000)
      .setValue("@inputSearchBlog", data.searchWord2)
      .click("@searchBtn")
      .waitForElementVisible("@searchBlogHeader")
      .pause(2000);
  },
  searchJava: function () {
    this.api.pause(1000);
    const data = getData();
    return this.waitForElementVisible("@unosquareLogo", 1000)
      //.click("@blogMenu")
      .setValue("@inputSearchBlog", data.searchWord3)
      .click("@searchBtn")
      .waitForElementVisible("@searchBlogHeader")
      .pause(2000);
  },
  searchTest: function () {
    this.api.pause(1000);
    const data = getData();
    return this.waitForElementVisible("@unosquareLogo", 1000)
      //.click("@blogMenu")
      .setValue("@inputSearchBlog", data.searchWord4)
      .click("@searchBtn")
      .waitForElementVisible("@searchBlogHeader")
      .pause(2000);
  },
  aboutUnosquare: function () {
    this.api.pause(1000);
    return this.waitForElementVisible("@unosquareLogo", 1000)
      .assert.visible("@aboutMenu")
      .click("@aboutMenu")
      .assert.visible("@marioAboutCard")
      .assert.visible("@gianAboutCard")
      .assert.visible("@eduardoAboutCard")
      .assert.visible("@ignacioAboutCard")
      .assert.visible("@diegoAboutCard")
      .pause(3000);
  },
};

module.exports = {
  commands: [unosquare],
  url: "https://www.unosquare.com",
  elements: {
    unosquareLogo: {
      selector: ".navbar-brand",
      locateStrategy: "css selector",
    },

    aboutMenu: {
      selector: "li a[href = 'https://www.unosquare.com/About']",
    },

    blogMenu: {
      selector: "li a[href= 'https://blog.unosquare.com']",
    },

    blogHeader: {
      selector: "//h1[contains(text(),'DIGITAL TRANSFORMATION BLOG')]",
      locateStrategy: "xpath",
    },

    recentPost: {
      selector: "label[for='tab1']",
    },

    popularPost: {
      selector: "label[for=tab2]",
    },

    popularTab: {
      selector: "input[id='tab2']",
    },

    sectionRecentPost: {
      selector: "#content1",
    },

    sectionPopularPost: {
      selector: "#content2",
    },

    inputSearchBlog: {
      selector: "input[name='query']",
    },

    searchBtn: {
      selector: "button[type='submit']",
    },

    searchBlogHeader: {
      selector: "//h1[contains(text(),'SEARCH')]",
      locateStrategy: "xpath",
    },

    navigationLink: {
      selector: "nav[role='navigation']",
    },

    marioAboutCard: {
      selector: "//span[contains(text(),'Mario Di Vece')]",
      locateStrategy: "xpath",
    },

    gianAboutCard: {
      selector: "//span[contains(text(),'Giancarlo Di Vece')]",
      locateStrategy: "xpath",
    },

    eduardoAboutCard: {
      selector: "//span[contains(text(),'Eduardo Arias')]",
      locateStrategy: "xpath",
    },

    ignacioAboutCard: {
      selector: "//span[contains(text(),'Ignacio Miranda')]",
      locateStrategy: "xpath",
    },

    diegoAboutCard: {
      selector: "//span[contains(text(),'Diego Huerta')]",
      locateStrategy: "xpath",
    },
  },
};
