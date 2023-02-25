import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import classes from "./Root.module.css";

export default function RootPage() {
  return (
    <>
      <SideNav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
