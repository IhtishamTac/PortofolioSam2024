import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingAnimation } from './components/LoadingAnimation';
import './App.css'

const LandingPage = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
