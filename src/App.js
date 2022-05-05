import NavBar from './components/navBar'
import Main from "./pages/main"
import Details from "./pages/details"
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Details />} />

      </Routes>
    </Router>
  );
}

export default App;
