import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Counter from './pages/Counter';
import Nav from './components/Nav/Nav';
import UseAxios from './pages/useAxios';
import UseBeforeLeave from './pages/useBeforeLeave';
import UseClick from './pages/useClick';
import UseConfirm from './pages/useConfirm';
import UseEffect from './pages/useEffect';
import UseFadeIn from './pages/useFadeIn';
import UseFullscreen from './pages/useFullscreen';
import UseHover from './pages/useHover';
import UseInput from './pages/useInput';
import UseNetwork from './pages/useNetwork';
import UseNotification from './pages/useNotification';
import UsePreventLeave from './pages/usePreventLeave';
import UseScroll from './pages/useScroll';
import UseState from './pages/useState';
import UseTabs from './pages/useTabs';
import UseTitle from './pages/useTitle';

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/useaxios" element={<UseAxios />} />
        <Route path="/usebeforeLeave" element={<UseBeforeLeave />} />
        <Route path="/useclick" element={<UseClick />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useconfirm" element={<UseConfirm />} />
        <Route path="/usefadein" element={<UseFadeIn />} />
        <Route path="/usefullscreen" element={<UseFullscreen />} />
        <Route path="/usehover" element={<UseHover />} />
        <Route path="/useinput" element={<UseInput />} />
        <Route path="/usenetwork" element={<UseNetwork />} />
        <Route path="/usenotification" element={<UseNotification />} />
        <Route path="/usepreventleave" element={<UsePreventLeave />} />
        <Route path="/usescroll" element={<UseScroll />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usetabs" element={<UseTabs />} />
        <Route path="/usetitle" element={<UseTitle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
