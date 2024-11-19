import { Outlet } from 'react-router-dom';
import { Header } from './components/ui';

import './utils/i18n';

import './App.scss';

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
