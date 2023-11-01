import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectStorage } from '../redux/myStorage'
import { TodoCreate, TodoRead, } from '../redux/MainViewReducer'


export const MainPage = (props) => {

    let dispatch = useDispatch()
    let elementsInStorage = useSelector(selectStorage)

    

    function pickTodo(event) {
        dispatch(TodoRead(event.target.id))
    }

    function createTodo() {
        dispatch(TodoCreate(true))
    }


    return (
        <div className='mainPage'>
            {elementsInStorage.map((e, i) => <div onClick={pickTodo} id={i} className='listOfElements' key={i}>{e[0]}</div>)}
            <button onClick={createTodo}>Create Todo</button>
        </div>
    )
}
