import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './Pages/AuthPage/LoginPage';
import RepositoryPage from './Pages/UserPage/RepositoryPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/repository' element={<RepositoryPage/>} />
        <Route path='/' element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
