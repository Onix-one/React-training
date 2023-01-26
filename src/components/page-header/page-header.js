import HeaderLogoIcon from "../../assets/icons/header-logo-icon";
import HeaderButton from "../buttons/header-button";
import "./page-header.css";

export default function PageHeader(props) {
  return (
    <div className="page-header fixed-top shadow">
      <div className="row">
        <div className="col-2">
          <HeaderLogoIcon></HeaderLogoIcon>
        </div>
        <div className="col-auto">
          <HeaderButton text="Tasks"></HeaderButton>
        </div>
        <div className="col-auto">
          <HeaderButton text="Jungle"></HeaderButton>
        </div>
        <div className="col-auto">
          <HeaderButton text="Trainings"></HeaderButton>
        </div>
        <div className="col-auto">
          <HeaderButton text="Courses"></HeaderButton>
        </div>
        <div className="col-auto">
          <HeaderButton text="Dictionary"></HeaderButton>
        </div>
      </div>
    </div>
  );
}
