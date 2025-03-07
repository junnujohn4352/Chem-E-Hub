import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import ChemicalDatabase from './components/ChemicalDatabase';
import CalculatorSuite from './components/CalculatorSuite';
import StudyHub from './components/StudyHub';
import GpaCalculator from './components/GpaCalculator';
import Countdown from './components/Countdown';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroAnimation />} />
        <Route path="/*" element={
          <>
            <Navigation />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/database" element={<ChemicalDatabase />} />
              <Route path="/calculator" element={<CalculatorSuite />} />
              <Route path="/study" element={<StudyHub />} />
              <Route path="/gpa" element={<GpaCalculator />} />
              <Route path="/countdown" element={<Countdown />} />
              <Route path="/resume" element={<ResumeBuilder />} />
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;