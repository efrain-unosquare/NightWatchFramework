module.exports = {
    'Search Item at Amazon' : function(browser){
        var amazon = browser.page.homepage();
        
        amazon
        .navigate()
        .searchItem()
        .validatePrice()
        //.deleteItem();

        browser.end();
    }
}