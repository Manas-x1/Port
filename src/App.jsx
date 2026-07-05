import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MetroidDetail from './pages/MetroidDetail';
import IdentityDetail from './pages/IdentityDetail';
import FluidWavesDetail from './pages/FluidWavesDetail';
import TheCubeDetail from './pages/TheCubeDetail';
import SynthesizedEchoesDetail from './pages/SynthesizedEchoesDetail';
import NeuralTopologyDetail from './pages/NeuralTopologyDetail';
import LatentSpacesDetail from './pages/LatentSpacesDetail';
import ChronoShiftDetail from './pages/ChronoShiftDetail';
import SpectralCutDetail from './pages/SpectralCutDetail';
import NeoNoirDetail from './pages/NeoNoirDetail';
import AboutMe from './pages/AboutMe';
import LoadingScreen from './components/LoadingScreen';
import ClickSpark from './components/ClickSpark';

function App() {
  return (
    <Router>
      <ClickSpark
        sparkColor="#ffffff"
        sparkSize={12}
        sparkRadius={20}
        sparkCount={8}
        duration={500}
      >
        <div className="min-h-screen bg-background text-on-surface">
          <LoadingScreen />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metroid" element={<MetroidDetail />} />
            <Route path="/identity" element={<IdentityDetail />} />
            <Route path="/fluid-waves" element={<FluidWavesDetail />} />
            <Route path="/the-cube" element={<TheCubeDetail />} />
            <Route path="/synthesized-echoes" element={<SynthesizedEchoesDetail />} />
            <Route path="/neural-topology" element={<NeuralTopologyDetail />} />
            <Route path="/latent-spaces" element={<LatentSpacesDetail />} />
            <Route path="/chrono-shift" element={<ChronoShiftDetail />} />
            <Route path="/spectral-cut" element={<SpectralCutDetail />} />
            <Route path="/neo-noir" element={<NeoNoirDetail />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </div>
      </ClickSpark>
    </Router>
  );
}

export default App;


