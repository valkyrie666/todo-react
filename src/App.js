import React from 'react';
import AppHeader from './Components/app-header';
import AddItemForm from './Components/item-add-form';
import TodoList from './Components/todo-list';
import SearchPanel from "./Components/search-panel";
import ItemStatusFilter from './Components/item-status-filter';

export default class App extends React.Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("React"),
      this.createTodoItem("Coffee"),
      this.createTodoItem("Sleep")
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  add = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      }
    });
  }

  remove = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const result = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: result
      };
    });
  }

  filter(items, filter) {
    switch(filter) {
      case 'all': return items;
      case 'active': return items.filter((item) => !item.done);
      case 'done': return items.filter((item) => item.done);
      default: return items;
    }
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const result = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      console.log(newItem);

      return {
        todoData: result
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const result = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      console.log(newItem);

      return {
        todoData: result
      };
    });
  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    console.log(visibleItems);

    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const importantCount = this.state.todoData.filter((el) => el.important).length;

    return(
      <div className="container text-center main">
        <AppHeader importantCount={importantCount} doneCount= {doneCount} />
        

        <div className="search-panel row">
				<div className="col-8">				
            <SearchPanel onSearchChange={this.onSearchChange} />
				</div>
				<div className="col-4">
					<ItemStatusFilter 
          filter={filter}
          onFilterChange={this.onFilterChange} />
				</div>
			</div>    

        <TodoList todos={visibleItems} 
        onDeleted={this.remove}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone} />
        <AddItemForm onItemAdded={this.add} />
      </div>
      );
  }
}
