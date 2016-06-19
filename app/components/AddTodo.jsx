var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        if (this.refs.inputText.value.length>0){
            this.props.addTodo(this.refs.inputText.value);
            this.refs.inputText.value = '';
        } else {
            this.refs.inputText.focus();
        }
    },
    render: function(){
        return (
            <div className='container__footer'>
                <form onSubmit={this.handleSubmit}>
                    <input ref='inputText' type='text'/>
                    <button className='button expanded'>Add Todo</button>
                </form>
            </div>
        )
    }
})

module.exports = AddTodo;
