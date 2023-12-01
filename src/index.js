import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './routes/dashboard/Dashboard';
import Navbar from './components/Navbar';
import Admin_product from './components/Admin_product';
import Dashboard_page from './components/Dashboard_page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='create_product' element={<Admin_product />} />
            <Route path='dashboard_page' element={<Dashboard_page/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
