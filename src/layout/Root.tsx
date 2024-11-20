import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

import './Root.scss';

function Root() {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
