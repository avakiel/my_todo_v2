import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StorageAdd, StorageCleanEmptyTodo, TodoCreate, TodoRead, deleteTodo, doneTodo, selectStorage, selectTodo, } from '../redux/MainViewReducer'
import './TodoPage.css'


export const TodoPage = (props) => {

  let dispatch = useDispatch()
  let elementsInStorage = useSelector(selectStorage)
  let pickedTodo = useSelector(selectTodo)


  let presentTodo = elementsInStorage[pickedTodo] || {}




  function exitTodo() {
    if (Object.keys(presentTodo).length === 0) {
      dispatch(StorageCleanEmptyTodo());
    }
    dispatch(TodoCreate(false));
    dispatch(TodoRead(null));
  }

  function addTodo() {
    const inputValue = document.querySelector('input').value;

    if (inputValue !== '') {
      dispatch(StorageAdd({ key: inputValue, value: false }));
    }
    document.querySelector('input').value = '';
  }

  function doneTask(target) {
    dispatch(doneTodo({ pickedTodo, target }));
  }

  function deleteTask(target) {
    dispatch(deleteTodo({ pickedTodo, target }));
  }


  return (
    <>
      <div>
        {Object.keys(presentTodo).map((e,i)=> presentTodo[e]? <li className='done' key={i}>
          {e}
        <button onClick={()=> doneTask(e)}>Done</button>
        <button onClick={() => deleteTask(e)}>Delete</button>
        </li> :  <li key={i}>
          {e}
        <button onClick={()=> doneTask(e)}>Done</button>
        <button onClick={() => deleteTask(e)}>Delete</button>
        </li>)}
      </div>
      <div>
        <input type="text" />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        <button onClick={exitTodo}>Exit</button>
      </div>
    </>

  )
}

