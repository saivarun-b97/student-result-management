import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import "../index.css";

export default function RootPage() {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
