import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import MainLayout from './components/layouts/MainLayout';
import NavBar from './components/elements/NavBar';
import MainContent from './components/elements/MainContent';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <NavBar />
        <MainContent />
      </MainLayout>
    </Router>
  );
}

export default App;
