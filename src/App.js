import './App.css';
import{Routes, Route} from "react-router-dom";
import {Home} from "./Components/Home";
import {TodoDetails} from "./Components/TodoDetails";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/TodoDetails/:id' element={<TodoDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
