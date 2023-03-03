import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../store/alert-slice";

export default function Alert() {
  const dispatch = useDispatch();

  const { isError, alertTitle, alertMessage } = useSelector((state) => state.alert);

  const onClick = () => {
    dispatch(alertActions.reset());
  };

  return (
    <>
      {ReactDOM.createPortal(
        <AlertBackdrop onClick={onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AlertOverlay
          isError={isError}
          title={alertTitle}
          message={alertMessage}
          onClick={onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

function AlertBackdrop(props) {
  return <div className="alert-backdrop" onClick={props.onClick} />;
}

function AlertOverlay(props) {
  return (
    <div className="alert-overlay">
      <header className="alert-header">
        <h2 className={props.isError ? "failed" : "succeeded"}>{props.title}</h2>
      </header>
      <div className="alert-content">
        <p>{props.message}</p>
      </div>
      <footer className="alert-actions">
        <button onClick={props.onClick}>Okay</button>
      </footer>
    </div>
  );
}
