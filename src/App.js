
import './App.css';
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import Table from './components/Table/Table';


function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <Sidebar/>
      <MainDash /> 
      <Table />
      <div></div>
      <div></div>
      <div></div>
      
      
      </div>
    </div>
  );
}

export default App;
