import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import '@styles/styles.scss';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
