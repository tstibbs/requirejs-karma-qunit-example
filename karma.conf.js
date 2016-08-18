module.exports = function(config) {
  config.set({

    frameworks: ['requirejs', 'qunit'],

    files: [
        {pattern: 'src/**/*.js', included: false},
        {pattern: 'test/**/*.js', included: false},
        'src/app.js',
        'test/qunit_suite/suite.js',
    ],

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};
