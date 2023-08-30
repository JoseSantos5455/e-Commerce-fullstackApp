import Start from "./pages/Landing/Start";
import Form from "./pages/CreateProduct/Form";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Detail from "./pages/Detail/Detail";
import BuyView from './pages/Buy/BuyView'
import {Routes, Route} from "react-router-dom"
import SearchBar from "./components/searchBar/SearchBar";
import MercadoPago from "./components/MercadoPago/MercadoPago";
export default function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" Component={Start}/>
          <Route exact path="/home" Component={Home}/>
          <Route exact path="/form" Component={Form}/>
          <Route exact path="/products/detail/:id" Component={Detail}/>
          <Route exact path="/products" Component={BuyView}/>
          <Route path="*" Component={NotFound}/>
          <Route exact path="/search" Component={SearchBar}/>
          <Route exact path="/pagos" Component={MercadoPago}/>
      </Routes>
    </div>
  )
}
