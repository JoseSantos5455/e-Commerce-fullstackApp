import { Route, Routes } from "react-router-dom";
import Start from "./pages/Home/Start";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </div>
  );
}
