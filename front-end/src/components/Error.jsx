import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { errorActions } from "../store/error-slice";

export default function Error() {
  const dispatch = useDispatch();

  const { errorTitle, errorMessage } = useSelector((state) => state.error);

  const onClick = () => {
    dispatch(errorActions.reset());
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ErrorBackdrop onClick={onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ErrorOverlay title={errorTitle} message={errorMessage} onClick={onClick} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

function ErrorBackdrop(props) {
  return <div className="error-backdrop" onClick={props.onClick} />;
}

function ErrorOverlay(props) {
  return (
    <div className="error-overlay">
      <header className="error-header">
        <h2>{props.title}</h2>
      </header>
      <div className="error-content">
        <p>{props.message}</p>
      </div>
      <footer className="error-actions">
        <button onClick={props.onClick}>Okay</button>
      </footer>
    </div>
  );
}
