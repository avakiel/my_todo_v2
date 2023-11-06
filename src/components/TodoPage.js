import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StorageAdd, StorageCleanEmptyTodo, TodoCreate, TodoRead, selectStorage, selectTodo } from '../redux/MainViewReducer'


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
    console.log(elementsInStorage)
  }



  return (
    <>
      <div>
        {Object.keys(presentTodo).map((e,i)=> <li key={i}>{e}</li>)}
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

