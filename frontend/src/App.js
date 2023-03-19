import './App.css';
import{Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/home/index';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path = "/" exact element = {<Home />}></Route>
        </Routes>
       
       
      
      </header>
    </div>
  );
}

export default App;
