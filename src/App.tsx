import { Outlet } from 'react-router-dom';

import './utils/i18n';

import './App.scss';

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
