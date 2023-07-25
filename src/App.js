import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Logo from './Components/SideBar/Logo';
import SideBar from './Components/SideBar/SideBar';
import * as ReactDOM from 'react-dom';
import AddNewBoard from './Components/Boards/AddNewBoard';
import NewTask from './Components/Tasks/NewTask';

function App() {
  return (
    <div className="App">
      {ReactDOM.createPortal(<AddNewBoard></AddNewBoard>, document.getElementById('portal1'))}
      {ReactDOM.createPortal(<NewTask></NewTask>, document.getElementById('portal2'))}
      <MainPage></MainPage>
    </div>
  );
}

export default App;
