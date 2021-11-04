import React from 'react';
import './AppDarkTheme.css';
import { AppHeader, SearchPanel, TodoList, AddItemForm } from '../';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          value: "Изучаешь популярные технологии",
          important: true,
          done: true,
        },
        {
          id: 2,
          value: "Заполняешь портфолио крутыми проектами",
          important: true,
          done: true,
        },
        {
          id: 3,
          value: "Проходишь собеседование",
          important: true,
          done: false,
        },
        {
          id: 4,
          value: "Получаешь искомую должность",
          important: true,
          done: false,
        }],
      query: '',
      filter: 'all',
      darkMode: false,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('items') !== null) {
      this.setState((state) => {
        return {
          data: JSON.parse(localStorage.getItem('items')),
        };
      });
    } else {
      localStorage.setItem('items', JSON.stringify(this.state.data));
    }
    if (localStorage.getItem('darkMode') !== null) {
      this.getLocalTheme();
    } else {
      this.setLocaltheme();
    }
  }

  componentDidUpdate() {
    this.setLocaltheme();
  }

  getLocalTheme() {
    this.setState(({ darkMode }) => {
      return {
        darkMode: JSON.parse(localStorage.getItem('darkMode')),
      };
    });
  }

  setLocaltheme() {
    localStorage.setItem('darkMode', this.state.darkMode);
  }

  changeTeheme = () => {
    this.setState(({ darkMode }) => {
      return {
        darkMode: !darkMode,
      };
    });
    this.setLocaltheme();
  };

  filterItems = (id) => {
    const newData = this.state.data.filter((item) => item.id !== id);
    this.setState((state) => (state.data = newData));
    localStorage.setItem('items', JSON.stringify(newData));
  };

  addItem = (text) => {
    const newItem = {
      value: text,
      id: this.state.data.length + 1,
      important: false,
      done: false,
    };

    localStorage.setItem(
      'items',
      JSON.stringify([...this.state.data, newItem])
    );

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item) => item.id === id);

    const currentItem = arr[idx];
    const newItem = { ...currentItem, [propName]: !currentItem[propName] };

    const newArr = [
      ...arr.map((item) => {
        if (item.id === newItem.id) item = newItem;
        return item;
      }),
    ];
    localStorage.setItem('items', JSON.stringify(newArr));
    return newArr;
  };

  onToggleDone = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, 'done'),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, 'important'),
      };
    });
  };

  searchItem = (items, query) => {
    if (query.length === 0) return items;

    return items.filter((item) => {
      return item.value.toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  };

  changeTerm = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  filter = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  toggleFilter = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  render() {
    const { data, query, filter, darkMode } = this.state;
    const visibleItems = this.filter(this.searchItem(data, query), filter);
    const doneNum = data.filter((item) => item.done).length;
    const todoNum = data.length - doneNum;

    return (
      <div
        className='app d-flex flex-column align-items-center'
        data-theme={this.state.darkMode ? 'true' : 'false'}
      >
        <div
          className='app__inner'
          style={{ maxWidth: '30rem', margin: '0 auto', marginTop: '5rem' }}
        >
          <AppHeader
            todo={todoNum}
            done={doneNum}
            changeTeheme={this.changeTeheme}
            darkMode={darkMode}
          />
          <SearchPanel
            query={this.state.query}
            changeTerm={this.changeTerm}
            toggleFilter={this.toggleFilter}
            filter={filter}
          />
          <TodoList
            data={visibleItems}
            onDelete={this.filterItems}
            onToggleDone={this.onToggleDone}
            onToggleImportant={this.onToggleImportant}
          />
          <AddItemForm onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}
