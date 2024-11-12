import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { SideNav } from './SideNav';
import { Publication } from './Publication';

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
