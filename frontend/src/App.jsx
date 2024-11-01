import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainLayout from "./Pages/More/MainLayout";
import Home from "./Pages/Home";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
      ],
    },

  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
