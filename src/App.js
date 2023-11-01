
import { useSelector } from 'react-redux';
import './App.css';
import { MainPage } from './components/MainPage';
import { TodoPage } from './components/TodoPage';
import { selectStorage, selectView } from './redux/MainViewReducer';





function App() {

  let mainState = useSelector(selectView)
  let elementsInStorage = useSelector(selectStorage)


  if (mainState.create === true || mainState.readTodo != null) {
    return (
      <div className="App">
        <TodoPage create={true} />
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
