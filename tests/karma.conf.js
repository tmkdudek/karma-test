// Karma configuration
// Generated on Mon Jun 09 2014 22:34:23 GMT+0200 (CEST)

module.exports = function(config) {

   var grid = {
    hostname: '192.168.169.12',
    port: 4444
  };
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../jquery.1.11.1.js',
      '../lib.js',
      './test.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,
    hostname :'192.168.169.12',


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

     customLaunchers: {
          'IE8': {
              base: 'WebDriver',
              config : grid,
              browserName: 'internet explorer',
              platform: 'WINDOWS',
              version: '8'
          },
          'IE7': {
                        base: 'WebDriver',
                        config : grid,
                        browserName: 'internet explorer',
                        platform: 'WINDOWS',
                        version: '7'
          }
        },


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['IE7','IE8','Firefox','Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
