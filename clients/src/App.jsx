import Start from "./pages/Home/Start";
import BuyView from "./pages/Buy/BuyView"
import Form from '../src/pages/CreateProduct/Form';
import { Routes, Route} from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/products" element={<BuyView/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  )
}
 