module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    page_objects_path: ['PageObjects/unosquare', 'PageObjects/amazon'],
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["Tests"],
    webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('chromedriver').path,
        cli_args: [
        ]
    },
    test_settings: {
        default: {
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities: {
                browserName: 'chrome'
            },
            globals: {
                priceItem: '',
                detailPrice: '',
                cartPriice: ''
            }

        }
    }
};

