import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { router } from './router';
import { persistor, store } from './store';

import './utils/i18n';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </PersistGate>
    </Provider>
  </StrictMode>
);
