import React from 'react';

import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
    <div className='px-6'>
      <Outlet/>
      
    </div>
    <Footer/></>
    
   
  );
};

export default App;