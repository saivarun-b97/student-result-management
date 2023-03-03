import NavigationBar from "../components/NavigationBar";

export default function NotFoundPage() {
  return (
    <>
      <header>
        <div>Student Result Management</div>
        <NavigationBar />
      </header>
      <main>
        <div className="not-found-page">
          Sorry! <br />
          Page Not Found
        </div>
      </main>
    </>
  );
}
