var React = require('react');
var TodoList = require('./TodoList')

var TodoApp = React.createClass({
    getInitialState: function(){
        return {
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
    render: function(){
        var {todos} = this.state;
        return (
            <div>
                <h1>Todo App</h1>
                <TodoList todos={todos}/>
            </div>

        )
    }
})

module.exports = TodoApp;
