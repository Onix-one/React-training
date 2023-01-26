import GoldButton from "../../../components/buttons/gold-button";
import "./dictionary-filter.css";

export default function DictionarFilter(props) {
  return (
    <div>
      <div className="row py-2">
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </div>
      <div className="row py-2">
        <div className="col-3">
          <GoldButton size="12" text="All words"></GoldButton>
        </div>
        <div className="col-3">
          <GoldButton size="12" text="Words"></GoldButton>
        </div>
        <div className="col-3">
          <GoldButton size="12" text="Phrases"></GoldButton>
        </div>
        <div className="col-3">
          <GoldButton size="12" text="Sentences"></GoldButton>
        </div>
      </div>
    </div>
  );
}
