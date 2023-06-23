import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Logo from './Components/SideBar/Logo';
import SideBar from './Components/SideBar/SideBar';
import ReactDOM from 'react-dom';
import AddNewBoard from './Components/Boards/AddNewBoard';

function App() {
  return (
    <div className="App">
      <AddNewBoard></AddNewBoard>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
