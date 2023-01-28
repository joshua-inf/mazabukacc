import './App.css';
import { Nav } from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './component/pages/home';
import { Marriage } from './component/pages/Services/Marriage';
import { Footer } from './component/pages/Footer';
import { useEffect, useState } from 'react';
import {SyncLoader} from 'react-spinners';
import { ECE } from './component/pages/Services/ECE';
import { Build } from './component/pages/Construction';
import { NewsList } from './component/pages/news/Newslist';

function App() {

    const [loading, setLoading] = useState();

    useEffect(() => {
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      }, 4000)
    }, [])
  return (
    <>
      <div className=''>
        {
          loading ?
          <div style={{height:'100vh'}} className='d-flex flex-column justify-content-around'>
            <div className='d-flex justify-content-center'>
              <SyncLoader size={20} color={"#000"} loading={loading} />
            </div>
          </div>
          :
          <BrowserRouter>
          <div className='d-flex flex-column'>
            <Nav />
            <div className='mt-5'>
              <Routes>
                <Route path='mazabukacc/' element={<Home />} />
                <Route path='mazabukacc/services/marriages' element={<Marriage />} />
                <Route path='mazabukacc/services/earlyChildEducation' element={<ECE />} />
                <Route path='mazabukacc/services/link' element={<Build/>} />
                <Route path='mazabukacc/NewsList' element={<NewsList/>} />
                <Route path='mazabukacc/NewsList/:id' element={<NewsList/>} />
              </Routes>
            </div>
            <Footer/>
          </div>
          </BrowserRouter>
        }
      </div>
    </>
  );
}

export default App;
