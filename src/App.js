import ReactDOM from "react-dom/client";

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hello from './Hello';
import Home from "./Home";

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="hello" element={<Hello />}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
