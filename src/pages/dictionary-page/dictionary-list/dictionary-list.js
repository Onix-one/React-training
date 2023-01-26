import { Component } from "react";
import DictionaryListItem from "./dictionary-list-item/dictionary-list-item";
import "./dictionary-list.css";

export default class DictionaryList extends Component {
  render() {
    const { words, onDelete } = this.props;

    const dictionaryListItems = words.map((word, index) => {
      const { id, ...wordProps } = word;
      return (
        <DictionaryListItem
          key={id}
          {...wordProps}
          onDelete={() => onDelete(id)}
        />
      );
    });

    return (
      <ul className="list-group list-group-flush">{dictionaryListItems}</ul>
    );
  }
}
