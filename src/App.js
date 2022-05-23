import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login/Login.jsx';
import Register from './Pages/Login/Register/Register.jsx';
import Header from './Pages/Shared/Header/Header.jsx';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
