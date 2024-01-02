import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Skills from './component/skills';
import Projects from './component/projects';
import Contact from './component/contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<About/>} path='/about' />
          <Route element={<Skills/>} path='/skill' />
          <Route element={<Projects/>} path='/project' />
          <Route element={<Contact/>} path='/contact' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
