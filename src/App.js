import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Logo from './Components/SideBar/Logo';
import SideBar from './Components/SideBar/SideBar';
import * as ReactDOM from 'react-dom';
import AddNewBoard from './Components/Boards/AddNewBoard';
import NewTask from './Components/Tasks/NewTask';
import EditBoard from './Components/Boards/EditBoard';
import { useSelector } from 'react-redux';
import { enableMapSet } from 'immer';

function App() {
  const displayState1 = useSelector((state)=>state.EditBoard);
  const displayState2 = useSelector((state)=>state.AddNewBoardB);
  const displayState3 = useSelector((state)=>state.AddNewTask);
  enableMapSet();
  return (
    <div className="App">
      {ReactDOM.createPortal((displayState2) ? <AddNewBoard></AddNewBoard> : <></>, document.getElementById('portal1'))}
      {ReactDOM.createPortal((displayState3) ? <NewTask></NewTask>:<></>, document.getElementById('portal2'))}
      {ReactDOM.createPortal((displayState1) ? <EditBoard></EditBoard> : <></>, document.getElementById("portal3"))}
      <MainPage></MainPage>
    </div>
  );
}

export default App;
