import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/navbar';
import Home from "./pages/home"
import Dashboard from './pages/dashboard';
import Products from "./components/products";
import Dash  from "./components/HeaderDash";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Clients from './components/clients';
import MakeOrder from './components/AddOrder';
import Orders from './components/orders';



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
            <Route path='Customer' element ={<Clients />}/>
            <Route path='currentOrder' element ={<MakeOrder />}/>
            <Route path='Orders' element ={ <Orders /> }/>
      </Route>
          
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
