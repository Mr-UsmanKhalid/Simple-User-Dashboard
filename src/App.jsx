import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import UserDashboard from "./Components/UserDashboard"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard/*" element={<UserDashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
