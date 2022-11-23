import logo from './logo.svg';
import './App.css';
import { FaBeer } from 'react-icons/fa';
import { createBrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

function App() {
  const clickme=()=>{
    toast.success('success',{autoClose:1000})
  }
  
  return (
    <div className="App">
      <button onClick={clickme}>click</button>
    </div>
  );
}

export default App;
