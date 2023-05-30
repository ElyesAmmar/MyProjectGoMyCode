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
import Footer from './components/footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAuthUser } from './JS/actions/user';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute';



function App() {
const dispatch= useDispatch()

const getUser= async()=>{
 await dispatch(getAuthUser())
}

useEffect(()=>{
  getUser()
},[])
  return (
    <div  >
      <BrowserRouter>
      <Bar />
      <Routes>
      <Route path='/'element={<Home  />}/>
      <Route path='/dashboard' element={<Dash /> }>
            <Route index element={<PrivateRoute> <Dashboard /></PrivateRoute> }/>
            <Route path='products' element={<Products />}/>
            <Route path='Customer' element ={<Clients />}/>
            <Route path='currentOrder' element ={<MakeOrder />}/>
            <Route path='Orders' element ={ <Orders /> }/>
      </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
      <ToastContainer />

    </div>
  );
}

export default App;
