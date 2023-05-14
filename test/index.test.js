const assert = require('assert');
const rewire = require("rewire");
const app = rewire('../src/index.js');


describe('App', () => {
    describe('#generateId()', () => {
        it('Should return Ids', () => {
            const notes = app.__get__("notes")
            assert.equal(app.__get__("generateId()"), notes.length + 1)
        });

    });

});