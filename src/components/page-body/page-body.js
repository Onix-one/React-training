import Loader from "../loader/loader";
import DictionaryPage from "../../pages/dictionary-page/dictionary-page";
import "./page-body.css";

export default function DageBody(props) {
  const isLoaded = true;

  return (
    <div className="page-body">
      <div className="container pt-4">
        <div className="d-flex justify-content-center">
          {isLoaded ? <DictionaryPage></DictionaryPage> : <Loader></Loader>}
        </div>
      </div>
    </div>
  );
}
