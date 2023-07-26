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

function App() {
  const displayState1 = useSelector((state)=>state.EditBoard);
  return (
    <div className="App">
      {ReactDOM.createPortal(<AddNewBoard></AddNewBoard>, document.getElementById('portal1'))}
      {ReactDOM.createPortal(<NewTask></NewTask>, document.getElementById('portal2'))}
      {ReactDOM.createPortal((displayState1) ? <EditBoard></EditBoard> : <></>, document.getElementById("portal3"))}
      <MainPage></MainPage>
    </div>
  );
}

export default App;
