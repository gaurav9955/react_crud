import NavBar from './Components/Layout/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Add from './Components/Pages/User/Add';
import Show from './Components/Pages/User/Show';

function App() {
  return (
    <>  
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user/add' element={<Add />} />
            <Route path='/user/show' element={<Show />} />
              
          </Routes>
        </BrowserRouter>      
     
    </>
    
  );
}

export default App;
