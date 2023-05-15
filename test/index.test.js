const assert = require('assert');

// Unit testing module constants by rewire dependency
const rewire = require("rewire");
const app = rewire('../src/index.js');

// API testing dependencies using chai
const request = require("request");
const expect = require("chai").expect;


describe('App Unit Test', () => {
    describe('#generateId()', () => {
        it('Should return generated max Id', () => {
            const notes = app.__get__("notes")
            assert.equal(app.__get__("generateId()"), notes.length + 1)
        });

    });
});

describe('App Api Tests', () => {
    let url = "http://localhost:3001/"

    describe('GET /', () => {
        it('Should return a successful Hello World! HTTP GET', () => {
            request(url, function (err, response){
                expect(response.statusCode).to.equal(200);
                expect(response.body).to.contain("Hello World!");
            });
        });

    });

    describe('Schema Validation /api/notes', () => {
        it('Should validate the received json against the provided schema', () => {
            request(url + "api/notes", function (err, response){
                let jsonData = JSON.parse(response.body)
                expect(jsonData).to.be.an('array')
                jsonData.forEach( data => {
                    assert.strictEqual(typeof data.id, 'number');
                    assert.strictEqual(typeof data.content, 'string');
                    assert.strictEqual(typeof data.date, 'string');
                    assert.strictEqual(typeof data.important, 'boolean');
                    }
                )
            });
        });
    });

});