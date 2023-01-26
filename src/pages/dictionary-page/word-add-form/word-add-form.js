import { Component } from "react";
import GoldButton from "../../../components/buttons/gold-button";
import "./word-add-form.css";

export default class WordAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      englishWord: "",
      russianWord: "",
      toAdd: this.props.toAdd,
    };
  }

  setWord = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addWord = () => {
    const { englishWord, russianWord, toAdd } = this.state;

    toAdd(englishWord, russianWord);

    this.setState({
      englishWord: "",
      russianWord: "",
    });
  };

  render() {
    const { englishWord, russianWord } = this.state;

    return (
      <div>
        <div className="row py-2 pt-5">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              name="englishWord"
              value={englishWord}
              placeholder="English"
              onChange={this.setWord}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              name="russianWord"
              value={russianWord}
              placeholder="Russian"
              onChange={this.setWord}
            />
          </div>
          <div className="col-4">
            <GoldButton
              size="12"
              text="Add new word"
              onClick={this.addWord}
            ></GoldButton>
          </div>
        </div>
      </div>
    );
  }
}
