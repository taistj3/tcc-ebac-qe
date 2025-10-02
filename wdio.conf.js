exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './projetoTCC/automacoes/testesMobile/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'ebacShop',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'br.com.lojaebac',
        'appium:appActivity': '.MainActivity',
        'appium:appWaitActivity': 'br.com.lojaebac/.MainActivity',
        'appium:noReset': true,
        'appium:fullReset': false,
        'appium:disableIdLocatorAutocompletion': true
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',

    reporters: ['spec', 'mochawesome'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

     beforeTest: async () => {
        // Fecha o app
        await driver.terminateApp('br.com.lojaebac');

        // Inicia o app especificando package e activity
        await driver.startActivity('br.com.lojaebac', 'br.com.lojaebac.MainActivity');
    },

    afterTest: async () => {
        // Fecha o app depois de cada teste
        await driver.terminateApp('br.com.lojaebac');
    },
}