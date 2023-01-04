import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Sidebar from './layouts/Sidebar';
import Collection from './router/collection';
import Root from './router/root';

const AppLayout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path='/' element={<Root />} />
      <Route path='collection' element={<Collection />} />
    </Route>,
  ),
);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
