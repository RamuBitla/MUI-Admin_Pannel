import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
import Home from './Pages/Home/Home';
import { userInput, userProduct } from './Components/FormSource';
import './Styles/Dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './Components/Context/Context';

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
     <BrowserRouter>
     <Routes>
      <Route path='/'>
        <Route index  element={<Home/>}/>
        <Route path='login' element={<Login/>} />
      </Route>
      <Route path='user'>
        <Route index element={<List/>} />
        <Route path=':userId' element={<Single/>} />
        <Route path='new' element={<New inputs = {userInput} title="Add New User"/>} />
      </Route>
      <Route path='products'>
        <Route index element={<List/>} />
        <Route path=':productId' element={<Single/>} />
        <Route path='new' element={<New inputs = {userProduct} title="Add New Product"/>} />
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
