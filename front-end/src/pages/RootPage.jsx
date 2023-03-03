import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

export default function RootPage() {
  return (
    <>
      <header>
        <div>Student Result Management</div>
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
