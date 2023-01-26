import { Component } from "react";
import DictionaryHeader from "./dictionary-header/dictionary-header";
import DictionarFilter from "./dictionary-filter/dictionary-filter";
import DictionarList from "./dictionary-list/dictionary-list";
import WordAddForm from "./word-add-form/word-add-form";

import "./dictionary-page.css";

export default class DictionaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 0, eng: "tongue", ru: "язык", marked: false },
        { id: 1, eng: "swimming trunks", ru: "плавки", marked: false },
        { id: 2, eng: "city break", ru: "отдых в городе", marked: false },
        { id: 3, eng: "han", ru: "курица", marked: false },
      ],
    };
  }

  deleteWord = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addWord = (eng, ru) => {
    this.setState(({ data }) => {
      let maxId = 0;
      data.forEach((item) => {
        if (item.id > maxId) {
          maxId = item.id;
        }
      });

      const newId = maxId + 1;
      const newWord = { id: newId, eng: eng, ru: ru, marked: false };

      return {
        data: [...data, newWord],
      };
    });
  };

  render() {
    return (
      <div className="col-5">
        <DictionaryHeader wordsCount={this.state.data.length}/>
        <DictionarFilter />
        <DictionarList words={this.state.data} onDelete={this.deleteWord} />
        <WordAddForm toAdd={this.addWord} />
      </div>
    );
  }
}
