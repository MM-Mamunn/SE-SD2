import Friends from './components/pages/Friends'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    Hi
    <Routes>
     <Route path="/group2/dashboard" element={<Friends />} />
     {/* <Route path="/" element={<Friends />} /> */}
    </Routes>
    </>
  )
}

export default App