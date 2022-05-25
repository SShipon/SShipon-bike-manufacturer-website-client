import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login/Login.jsx';
import Register from './Pages/Login/Register/Register.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import Footer from './Pages/Shared/Footer/Footer.jsx';
import Header from './Pages/Shared/Header/Header.jsx';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}></Route>
        <Route ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
