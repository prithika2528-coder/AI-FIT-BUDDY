import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Coach from './pages/Coach';
import Progress from './pages/Progress';
import TopNav from './components/TopNav';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <TopNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
