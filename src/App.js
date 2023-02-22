import './App.css';
import { Nav } from './component/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './component/pages/home';
import { Marriage } from './component/pages/Services/Marriage';
import { Footer } from './component/pages/Footer';
import { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import { ECE } from './component/pages/Services/ECE';
import { Build } from './component/pages/Construction';
import { NewsList } from './component/pages/news/Newslist';
import { ListNews } from './component/pages/news/listNews';
import Payment from './payments/PaymentMain';
import ScrollToTop from './Scrolltotop';
import { motion } from 'framer-motion';

function App() {

  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
      <div className=''>
        {
          loading ?
            <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-around'>
              <div className='d-flex justify-content-center'>
                <SyncLoader size={20} color={"#000"} loading={loading} />
              </div>
            </div>
            :
            <BrowserRouter>
              <ScrollToTop />

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} className='d-flex flex-column'>
                <Nav />
                <div className=''>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services/marriages' element={<Marriage />} />
                    <Route path='/services/earlyChildEducation' element={<ECE />} />
                    <Route path='/services/link' element={<Build />} />
                    <Route path='/NewsList' element={<NewsList />} />
                    <Route path='/NewsList/:id' element={<ListNews />} />
                    <Route path='/epay' element={<Payment />} />
                  </Routes>
                </div>
                <Footer />
              </motion.div>
            </BrowserRouter>
        }
      </div>
    </>
  );
}

export default App;
