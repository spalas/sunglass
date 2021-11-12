
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Register from './components/Login/Register/Register';
import Login from './components/Login/Login/Login';
import AddProducts from './Sheared/AddProdocts/AddProducts';
import Buying from './components/Products/Buying/Buying';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Sheared/Dashboard/Dashboard';
import Myorder from './components/Products/MyOrder/Myorder';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/myOrder">
              <Myorder />
            </Route>
            <PrivateRoute path="/addproducts">
              <AddProducts />

            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />

            </PrivateRoute>





            <Route path="/buying/:buyingId">
              <Buying />
            </Route>
            <Route path="/login">
              <Login
              />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>




    </div>
  );
}

export default App;
