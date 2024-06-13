import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingAnimation } from './components/LoadingAnimation';
import './App.css'

const LandingPage = lazy(() => import('./pages/LandingPage'));
const OtherProject = lazy(() => import('./pages/OtherProjectPage'));

function App() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/other-project" element={<OtherProject />} />
      </Routes>
    </Suspense>
  )
}

export default App
