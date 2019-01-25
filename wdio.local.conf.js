const { config: common } = require('./wdio.conf')

exports.config = Object.assign(common, {
  port: 9515,
  path: '/',

  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
      browserName: 'chrome'
  }],

  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['applitools', 'chromedriver'],
  maxInstances: 1,

  // logs
  chromeDriverLogs: common.outputDir
})
