import Start from "./pages/Home/Start";
import Form from "./pages/CreateProduct/Form";
import {Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" Component={Start}/>
          <Route exact path="/form" Component={Form}/>
      </Routes>
    </div>
  );
}
