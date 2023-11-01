import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StorageAdd, TodoCreate, TodoRead, selectStorage, selectTodo} from '../redux/MainViewReducer'


export const TodoPage = (props) => {

  let dispatch = useDispatch()
  let elementsInStorage = useSelector(selectStorage)
  let pickedTodo = useSelector(selectTodo)





  let presentTodo = elementsInStorage[pickedTodo] || []

  let tempTodo = []


  function exitTodo() {
    dispatch(TodoCreate(false))
    dispatch(TodoRead(null))
  }

  function addTodo() {
    let inputValue = document.querySelector('input').value

    if (inputValue !== '') {
      if (pickedTodo) {
        dispatch(StorageAdd(inputValue))
      }
    }
    document.querySelector('input').value = ''

    console.log(tempTodo)
  }



  return (
    <>
      <div>
        {presentTodo.map((e, i) => <li key={i}>{e}</li>)}
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

