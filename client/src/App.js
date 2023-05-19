import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/navbar';
import Home from "./pages/home"
import Dashboard from './pages/dashboard';
import Products from "./components/products";
import Dash  from "./components/HeaderDash";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Clients from './components/clients';
import OrdersBar from './components/SearchBarOrder';



function App() {
  return (
    <div  >
      <BrowserRouter>
      <Bar />
      <Routes>
      <Route path='/'element={<Home  />}/>
      <Route path='/dashboard' element={<Dash />}>
            <Route index element={<Dashboard />}/>
            <Route path='products' element={<Products />}/>
            <Route path='clients' element ={<Clients />}/>
            <Route path='orders' element ={<OrdersBar/>}/>
      </Route>
          
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
