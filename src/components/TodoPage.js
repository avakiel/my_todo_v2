import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoCreate, TodoRead, selectTodo, selectView } from '../redux/MainViewReducer'
import { selectStorage } from '../redux/myStorage'

export const TodoPage = (props) => {

  let dispatch = useDispatch()
  let elementsInStorage = useSelector(selectStorage)
  let pickedTodo = useSelector(selectTodo)


  function exitTodo() {
    dispatch(TodoCreate(false))
    dispatch(TodoRead(null))
  }

  let presentTodo = elementsInStorage[pickedTodo] || []

  
 

  return (
    <>
      <div>
        {presentTodo.map((e, i) => <li key={i}>{e}</li>)}
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <button onClick={exitTodo}>Exit</button>
      </div>
    </>

  )
}

