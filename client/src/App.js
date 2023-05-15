import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/navbar';
import Home from "./pages/home"
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div  >
      <BrowserRouter>
      <Bar />
      <Routes>
      <Route path='/'element={<Home  />}/>
      <Route path='/dashboard'element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
