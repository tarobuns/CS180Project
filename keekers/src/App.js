//import { Children } from "react";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  //Route,
  Outlet, 
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import NavigationBar from "./components/navigationbar/NavigationBar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Settings from "./pages/settings/Settings";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const {currentUser} = useContext(AuthContext);

  const queryClient = new QueryClient(); // For posting

  //with this layout, the user will continue to have the left and right bars
  // on the screen when switching between home page and profile page
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div>
        <NavigationBar/>
        <div style={{display: "flex" }}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar/>
        </div>
      </div>
      </QueryClientProvider>
    );
  };

  //ensures that if a user has no profile,
  // then they are redirected to login page
  const ProtectedRoute = ({children}) =>{ 
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
      ),
       children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
        {
          path:"/settings",
          element: <Settings />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register", 
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
