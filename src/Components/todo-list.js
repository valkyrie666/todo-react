import React from 'react';
import TodoListItem from './todo-list-item';

 const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps } = item;
        
        return (
            <li className="list-group-item text-left" key={item.id}>
                <TodoListItem { ...itemProps} 
                onDeleted={() => onDeleted(id)} 
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={()=> onToggleDone(id)} />
            </li>
        )
    });
    
    return (
        <div className="main">
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    );
}

export default TodoList;