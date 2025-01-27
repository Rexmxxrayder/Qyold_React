import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasePage from "./Page/BasePage"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
