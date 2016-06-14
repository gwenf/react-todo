var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('../../components/TodoApp');

describe('render',()=>{
    it('should exist',()=>{
        expect(TodoApp).toExist();
    })
})
