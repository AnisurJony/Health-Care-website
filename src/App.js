
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './firebase/Login/Login';
import Register from './firebase/Register/Register';
import NotFound from './NotFound/NotFound';
import AboutUs from './pages/About/AboutUs';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import BookNow from './pages/HiddenPage/BookNow/BookNow';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import PrivateRoute from './pages/PrivateRoutePage/privateRoute/PrivateRoute';
import ServiceDetails from './pages/PrivateRoutePage/ServiceDetails/ServiceDetails';
import SendInquiry from './pages/SendInquiry/SendInquiry';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header></Header>

          <Switch>


            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/sentinquiry">
              <SendInquiry></SendInquiry>
            </PrivateRoute>

            <PrivateRoute path="/booknow">
              <BookNow></BookNow>
            </PrivateRoute>

            <Route path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>


            <Route path="/*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          {/* <Footer></Footer> */}

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
