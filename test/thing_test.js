define(['thing', 'jquery'],
    function(thing, jquery) {
		QUnit.test('thing displays text', function (assert) {
			//set up
			var fixture = jquery('#qunit-fixture');
			fixture.append('<div id="info"></div>');
			//run test
			thing();
			//verify
			assert.equal(fixture.text(), 'this is some text')
		});
	}
);
