import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './components/todoItem/todoItem';
import TodoForm from './components/todoForm/todoForm';
import './App.css';

// TODO Function Component

function App() {
    const todos = useSelector(state => state);
    return (
        <div className="App">
            <div className="colum">
                <div className="todo-list">
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                        />
                    ))}
                    <TodoForm />
                </div>
            </div>
        </div>
    );
}

export default App;
