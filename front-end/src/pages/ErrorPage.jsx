import NavigationBar from "../components/NavigationBar";
import "../index.css";

export default function ErrorPage() {
  return (
    <>
      <header>
        <div>Student Result Management</div>
        <NavigationBar />
      </header>
      <main>
        <div className="error-page">
          Sorry! <br />
          Page Not Found
        </div>
      </main>
    </>
  );
}
