import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { SideNav } from './components/SideNav';
import { Publication } from './Publication';
import { CityOnDivision } from './projects/CityOnDivision';
import { Puzzle } from './projects/Puzzle';
import { TimeTunnel } from './projects/TimeTunnel';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full bg-[#f3f3f3]">
        <SideNav className="w-[28%] h-screen fixed" />
        <div className="content ml-[28%] w-[72%] min-h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/about" element={<About />} />
            <Route path="/city-on-division" element={<CityOnDivision />} />
            <Route path="/puzzle" element={<Puzzle />} />
            <Route path="/time-tunnel" element={<TimeTunnel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
