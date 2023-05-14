const assert = require('assert');

// Unit testing module constants by rewire dependency
const rewire = require("rewire");
const app = rewire('../src/index.js');

// API testing dependencies using chai
const request = require("request");
const chai = require('chai');
const expect = require("chai").expect;
chai.use(require('chai-json-schema'));

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
        const notesSchemaV1 = require('./resources/notes_schema_v1.json')


        it('Should validate the received json against the provided schema', () => {
            request(url + "api/notes", function (err, response){
                expect(response.body).to.be.jsonSchema(notesSchemaV1);
            });
        });

    });
});