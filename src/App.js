import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

const App = () => {
  
  const [list, setlist] = useState();
  const [item, setitem] = useState([]);
  
  const InputText = (event) => {
    setlist(event.target.value)
  }

  const listText = () => {
    setitem((oldItems) => {
      return [...oldItems, list]
    });
    setlist('');
  }

  const deleteItem = (id) => {
    console.log('hi')
    setitem((oldItems) => {
      return oldItems.filter((arrItem, index) => {
        return index !== id;
      })
    });
  }
  
  return (
    <>
      <div className='main'>
        <div className='center'>
          <h1>Todo List</h1>
          <div>
            <input type='text' placeholder='Enter Items' onChange={InputText} value={list}/>
            <button onClick={listText}> + </button>
          </div>

          <ol>
            {item.map((itemVal, index) => {return <TodoList id={index} key={index} textItem={itemVal} onSelect={deleteItem}/>})}
          </ol>

        </div>
      </div>
    </>
  );
}

export default App;