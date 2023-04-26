
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/home';
import Services from './pages/services';
import Shop from './pages/shop';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Contact/>} />
          <Route path='about' element={<Home/>}/>
          <Route path='post' element={<Services/>}/> 
          <Route path='login' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
