import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingAnimation } from './components/LoadingAnimation';
import './App.css'
import NotFound from './pages/404NotFound';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const OtherProject = lazy(() => import('./pages/OtherProjectPage'));
const AboutMe = lazy(() => import('./pages/AboutMe'));

function App() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/other-project" element={<OtherProject />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
