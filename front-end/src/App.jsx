import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import RootPage from "./pages/RootPage";
import StudentPage from "./pages/StudentPage";
import { loadCourses } from "./store/course-actions";
import { loadResults } from "./store/result-actions";
import { loadStudents } from "./store/student-actions";

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

let initialLoad = true;

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialLoad) {
      initialLoad = false;
      dispatch(loadCourses());
      dispatch(loadStudents());
      dispatch(loadResults());
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
