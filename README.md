## RequireJS + Karma + QUnit
It seems quite simple now, but I had some trouble getting requirejs, karma, qunit and phantomjs to all play nicely together. So, I created this small example project as a reference for how to hook them all up.

It is set up so that you can run the tests via karma (using phantomjs by default) but also run them using a qunit test page.

To run the qunit test page open `test/qunit_suite/test.html` in a browser.

To run using karma run the following commands:
```
npm install
node node_modules/karma/bin/karma start
```
