import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home"
import {About} from "./components/about"
import {Routes,Route} from "react-router-dom"
import {Navbar} from "./components/navbar"
import {UsersList} from "./components/UsersList";
import {UserDetails} from "./components/UserDetails"
import {PrivateComponent} from "./components/PrivateComponent"
import { Login } from './components/login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/users" element={<UsersList></UsersList>}></Route>
      <Route path="/users/:id" element=
      {<PrivateComponent>
        <UserDetails />
      </PrivateComponent>}></Route>
      <Route path="/login" element={<Login />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
