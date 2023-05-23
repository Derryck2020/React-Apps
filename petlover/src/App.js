import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';
import Birds from './pages/Birds';
import Horses from './pages/Horses';
import Error from './pages/Error';
import SinglePet from './pages/SinglePet';
// import components
import Navbar from './components/Navbar';
function App() {
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dogs" element={<Dogs />} />
            <Route path="cats" element={<Cats />} />
            <Route path="birds" element={<Birds />} />
            <Route path="horses" element={<Horses />} />
            <Route path="pet/:id" element={<SinglePet />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   );
}

export default App;
