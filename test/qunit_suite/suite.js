//list of tests
var testFiles = [
	"thing_test.js"
];

if (window.__karma__ == undefined) {
	//we've just opened a qunit page locally for dev purposes
	setupNonKarma();
} else {
	//we're running karma as part of the build
	setupKarma();
}

function setupNonKarma() {
	QUnit.config.autostart = false;

	var tests = [];
	var tests = testFiles.map(function (testFile) { 
		return '../' + testFile;
	})

	// Resolve all testModules and then start the Test Runner.
	requirejs(tests, function(){
		QUnit.load();
		QUnit.start();
	});
}

function setupKarma() {

	var tests = [];
	var tests = testFiles.map(function (testFile) { 
		return '/base/test/' + testFile;
	});

	requirejs.config({
		baseUrl: '/base/src',

		//load our tests
		deps: tests,

		//kick off tests only once requirejs has finished, but only once
		callback: function() {
			if (window.KARMA_TESTS_STARTED === true) {
				return;
			} else {
				window.KARMA_TESTS_STARTED = true;
				window.__karma__.start();
			}
		}
	});
}
