import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import NotFoundPage from './Pages/NotFoundPage'
import RecipeDetails from './Pages/RecipeDetails'


function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>

  )
}

export default App
