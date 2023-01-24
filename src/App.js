import './App.css';
import { Nav } from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './component/pages/home';

function App() {
  return (
    <>
      <Nav />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='mazabukacc/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
