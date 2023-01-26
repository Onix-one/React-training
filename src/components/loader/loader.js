import LogoIcon from "../../assets/icons/logo-icon";
import "./loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <div className="row">
        <div className=" col-4 loader-rotate-right">
          <LogoIcon></LogoIcon>
        </div>
        <div className="loader-text col-8">PLEASE WAIT A FEW SECONDS</div>
      </div>
    </div>
  );
}
