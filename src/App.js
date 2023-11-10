import './components/MainPage.css'
import { useSelector } from 'react-redux';
import { MainPage } from './components/MainPage';
import { TodoPage } from './components/TodoPage';
import { selectStorage, selectView } from './redux/MainViewReducer';





function App() {

  let mainState = useSelector(selectView)
  let elementsInStorage = useSelector(selectStorage)


  if (mainState.create === true || mainState.readTodo != null) {
    return (
      <>
        <p className='main_info'>My Todos</p>
        <div className="App">
          <TodoPage />
        </div>
      </>
    )
  } else {
    return (
      <>
        <p className='main_info'>My Todos</p>
        <div className="App">
          <MainPage elementsInStorage={elementsInStorage} />
        </div>
      </>

    )
  }
}



export default App;
