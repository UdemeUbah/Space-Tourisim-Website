import {Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/HomePage/Home';
import Navbar from './Components/NavBar/Navbar';
import Crew from './Components/Pages/Crew/Crew';
import Destination from './Components/Pages/Destination/Destination';
import Technology from './Components/Pages/Technology/Technology';

function App() {
  return (
    <div>
      <Navbar />
    
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Destination' element={<Destination />} />
      <Route path='/Crew' element={<Crew />} />
      <Route path='/Technology' element={<Technology />} />
     </Routes>
    </div>
  );
}

export default App;
