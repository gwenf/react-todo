var React = require('react');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
var TodoSearch = require('./TodoSearch');
var uuid = require('node-uuid');
var TodoAPI = require('../api/TodoAPI.jsx');

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate: function(){
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function(text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    },
    handleToggle: function(id){
        var updatedTodos = this.state.todos.map((todo)=>{
            if (todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        })
        this.setState({
            todos: updatedTodos
        })
    },
    handleSearch: function(showCompleted, searchText){
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function(){
        var {todos, showCompleted, searchText} = this.state;
        var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filterTodos} onToggle={this.handleToggle}/>
                <AddTodo addTodo={this.handleAddTodo} />
            </div>

        )
    }
})

module.exports = TodoApp;
