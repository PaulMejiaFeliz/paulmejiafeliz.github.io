import { Outlet } from 'react-router-dom';

import './utils/i18n';

import './App.scss';
import { Header } from './components/ui/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
