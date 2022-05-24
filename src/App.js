import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About.jsx';
import AddParts from './Pages/AddParts/AddParts.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder.jsx';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile.jsx';
import Explore from './Pages/Explore/Explore.jsx';
import AddReview from './Pages/Home/AddReview/AddReview.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login/Login.jsx';
import Register from './Pages/Login/Register/Register.jsx';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth.js';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import Footer from './Pages/Shared/Footer/Footer.jsx';
import Header from './Pages/Shared/Header/Header.jsx';
import NotFound from './Pages/Shared/NotFound/NotFound.jsx';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/product/:productId"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/addParts" element={<AddParts></AddParts>}></Route>
        <Route path="/explore" element={<Explore></Explore>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
