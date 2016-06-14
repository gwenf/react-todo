var React = require('react');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
var TodoSearch = require('./TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Clean my room'
                },
                {
                    id: 2,
                    text: 'Buy bananas'
                }
            ]
        }
    },
    handleAddTodo: function(text){
        alert('new todo: ' + text);
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo addTodo={this.handleAddTodo} />
            </div>

        )
    }
})

module.exports = TodoApp;
