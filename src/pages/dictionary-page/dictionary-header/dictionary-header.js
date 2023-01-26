import "./dictionary-header.css";

export default function DictionaryHeader({ wordsCount }) {
  return (
    <div className="row py-2">
      <div className="col-auto">
        <h5 className="text">MY DICTIONARY ({wordsCount})</h5>
      </div>
    </div>
  );
}
