
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
import Explore from './Sheared/Explore/Explore';
import PayMent from './Sheared/PayMent/PayMent';



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
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/payment">
              <PayMent />
            </Route>

            <PrivateRoute path="/addproducts">
              <AddProducts />

            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <Myorder />

            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />

            </PrivateRoute>





            <PrivateRoute path="/buying/:buyingId">
              <Buying />
            </PrivateRoute>
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
