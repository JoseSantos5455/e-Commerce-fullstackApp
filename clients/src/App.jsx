import Start from "./pages/Home/Start";
import BuyView from "./pages/Buy/BuyView"
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/products" element={<BuyView/>}/>
      </Routes>
    </div>
  )
}
 