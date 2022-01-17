import './App.css';
import Home from './Home';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import User from './User';
import Profile from './Profile';

function App() {

const [user, setUser] = useState(null)


  return (
    <Router>
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
     <Routes>
      {!user&&<Route path='/' element = {<Home user={user} setUser={setUser}/>}/>}
      {user&& <Route path='/user' element ={<User user={user}/>} />}
     </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
