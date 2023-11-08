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
      <div className="App">
        <TodoPage />
      </div>
    )
  } else {
    return (
      <div className="App">
        <MainPage elementsInStorage={elementsInStorage} />
      </div>
    )
  }
}



export default App;
