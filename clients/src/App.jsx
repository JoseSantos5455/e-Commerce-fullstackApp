import { Route, Routes } from "react-router-dom";
import Start from "./pages/Home/Start";
import BuyView from "./pages/Buy/BuyView"
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/products" element={<BuyView />} />
      </Routes>
    </div>
  );
}
 