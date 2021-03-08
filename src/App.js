import React, { Component } from 'react';
import shortid from 'shortid';
// import Counter from './components/counter';
// import Dropdown from './components/dropdown';
// import ColorPicker from './components/colorPicker';
import TodoList from './components/todoList';
import Filter from './components/filter';

// import Form from './components/form/Form';
import TodoEditor from './components/todoEditor';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    inputValue: 'initialTodos',
    todos: [
      { id: 'id-1', text: 'Todo 1', completed: false },
      { id: 'id-2', text: 'Todo 2', completed: true },
      { id: 'id-3', text: 'Todo 3', completed: false },
    ],
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // console.log(todoId);

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('Нашли тот туду, который нужно');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    }));
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { todos } = this.state;

    const visibleTodos = this.getVisibleTodos();

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );

    return (
      <>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}

        <h1>Состояние компонента</h1>

        <Filter filter={this.state.filter} onChangeFilter={this.changeFilter} />

        <TodoEditor onSubmit={this.addTodo} />

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <Counter initialValue={100} />

        <Dropdown /> */}

        {/* <ColorPicker option={colorPickerOptions} /> */}

        <div>
          <span>Общее кол-во: {todos.length}</span>
          <span>Кол-во выполненных: {completedTodos} </span>
        </div>

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </>
    );
  }
}

export default App;
