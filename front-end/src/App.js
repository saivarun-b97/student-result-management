import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import RootPage from "./pages/RootPage";
import StudentPage from "./pages/StudentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/student", element: <StudentPage /> },
      { path: "/course", element: <CoursePage /> },
      { path: "/result", element: <ResultPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
