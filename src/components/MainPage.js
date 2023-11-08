import React from 'react'
import './MainPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { StorageNewTodo, TodoCreate, TodoRead, selectStorage, } from '../redux/MainViewReducer'


export const MainPage = (props) => {

    let dispatch = useDispatch()
    let elementsInStorage = useSelector(selectStorage)

    

    function pickTodo(event) {
        dispatch(TodoRead(event.target.id))
    }

    function createTodo() {
        dispatch(TodoCreate(true))
        dispatch(StorageNewTodo())
        dispatch(TodoRead(elementsInStorage.length))
    }


    return (
        <div className='mainPage'>
            {elementsInStorage.map((e, i) => <div onClick={pickTodo} id={i} className='listOfElements' key={i}>{Object.keys(e)[0]}</div>)}
            <button onClick={createTodo}>Create Todo</button>
        </div>
    )
}
