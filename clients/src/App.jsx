import Start from "./pages/Landing/Start";
import Form from "./pages/CreateProduct/Form";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Detail from "./pages/Detail/Detail";
import BuyView from './pages/Buy/BuyView'
import {Routes, Route} from "react-router-dom"
import Abt from "./pages/Abt/Abt";
import Info from "./pages/Info/Info";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" Component={Start}/>
          <Route exact path="/home" Component={Home}/>
          <Route exact path="/form" Component={Form}/>
          <Route exact path="/products/detail/:id" Component={Detail}/>
          <Route exact path="/products" Component={BuyView}/>
          <Route exact path="/products/:search" Component={BuyView}/>
          <Route exact path="/about" Component={Abt}/>
          <Route exact path="/howedoit" Component={Info}/>
          <Route exact path="/admin" Component={Dashboard}/>
          <Route path="*" Component={NotFound}/>
      </Routes>
          
    </div>
  )
}
