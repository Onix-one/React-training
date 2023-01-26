import Loader from "../loader/loader";
import TestPage from "../../pages/test-page/test-page";
import "./page-body.css";

export default function PageBody(props) {
  const isLoaded = true;

  return (
    <div className="page-body">
      <div className="container pt-4">
        <div className="d-flex justify-content-center">
          {isLoaded ? <TestPage /> : <Loader />}
        </div>
      </div>
    </div>
  );
}
