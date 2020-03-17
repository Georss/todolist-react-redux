import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../../actions';
import './todoItem.css';

const TodoItem = ({ id, text, completed, toggleItem, removeItem }) => {
   return (
    <div className="todo-item flex-container">
        <div className="container" onClick={() => toggleItem(id)} data-itemid={id}>
            <div className="flex-container check-text-item">
                <div className="check-box">
                    <div className="box" style={{ backgroundColor: `${completed ? 'green' : ''}` }} />
                </div>
                <div className={completed ? 'todo-text completed' : 'todo-text'}>{text}</div>
            </div>
        </div>
        <button className="remove-button" onClick={() => removeItem(id)} data-itemid={id}>x</button>
    </div>
)};

function todoItemPropsAreEqual(prevTodoItem, nextTodoItem) {
    return prevTodoItem.completed === nextTodoItem.completed;
}

const MemoTodoItem = React.memo(TodoItem, todoItemPropsAreEqual);

const mapStateToProps = (state, ownProps) => {
    return {
        n: true
    }
  }

const mapDispatchToProps = (dispatch) => ({
    
    toggleItem: (id) =>  {
        dispatch(toggleTodo(id));
    },

    removeItem: (id) => {
        dispatch(removeTodo(id));
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(MemoTodoItem);
