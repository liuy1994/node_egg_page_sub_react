import React from 'react';
import './App.less';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./pages/routes"

function App() {

  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
