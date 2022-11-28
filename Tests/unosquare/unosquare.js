module.exports = {
    
    'Test Script 1' : function(browser){
        var unosquare = browser.page.unosquarepage();

        unosquare
        .navigate()
        .blogUnosquare()
        .searchQAInBlog()
        .searchDevelopment()
        .searchJava()
        .searchTest()
        .aboutUnosquare();

        browser.end();
    }
}