import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import rootReducer from './Reducer';
import App from './components/app/App';
import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './localstorage'; // Функции для загрузки и сохранения состояния
const root = ReactDOM.createRoot(document.getElementById('root'));
const persistedState = loadState(); // Загружаем состояние из localStorage
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState(store.getState()); // Сохраняем состояние в localStorage при каждом изменении
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
