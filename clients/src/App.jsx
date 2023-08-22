import Start from "./pages/Landing/Start";
import Form from "./pages/CreateProduct/Form";
import Home from "./pages/Home/Home";
import NotFaund from "./pages/NotFaund/NotFaund";
import Detail from "./pages/Detail/Detail";
import {Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" Component={Start}/>
          <Route exact path="/home" Component={Home}/>
          <Route exact path="/form" Component={Form}/>
          <Route exact path="/detail:id" Component={Detail}/>
          <Route path="*" Component={NotFaund}/>
      </Routes>
    </div>
  )
}
