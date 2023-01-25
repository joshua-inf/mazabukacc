import './App.css';
import { Nav } from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './component/pages/home';
import { Marriage } from './component/pages/Services/Marriage';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='mazabukacc/' element={<Home />} />
            <Route path='mazabukacc/services/marriages' element={<Marriage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
