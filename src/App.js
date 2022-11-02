import {Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Navbar from './Components/NavBar/Navbar';
import Crew from './Components/Pages/Crew/Crew';
import Destination from './Components/Pages/Destination/Destination';
import Mars from './Components/Pages/Destination/Mars'
import Europa from './Components/Pages/Destination/Europa'
import Titan from './Components/Pages/Destination/Titan'
import Technology from './Components/Pages/Technology/Technology';

function App() {
  return (
    <div>
      <Navbar />
    
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/destination' element={<Destination />}>
        <Route path='/destination/mars' element={<Mars /> } />
        <Route path='/destination/europa' element={<Europa /> } />
        <Route path='/destination/titan' element={<Titan /> } />
        
      </Route>
      <Route path='/crew' element={<Crew />} />
      <Route path='/technology' element={<Technology />} />
     </Routes>
    </div>
  );
}

export default App;
