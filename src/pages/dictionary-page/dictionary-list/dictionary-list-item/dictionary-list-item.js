import { Component } from "react";
import TrashBinIcon from "../../../../../src/assets/icons/trash-bin-icon";
import BookmarkIcon from "../../../../../src/assets/icons/bookmark-icon";
import "./dictionary-list-item.css";

export default class DictionaryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: this.props.marked,
    };
  }

  toogleMarkedState = () => {
    this.setState(({ marked }) => ({
      marked: !marked,
    }));
  };

  render() {
    const { eng, ru, onDelete } = this.props;
    const { marked } = this.state;

    let classes = "small-icon";
    if (marked) {
      classes += " marked";
    } else {
      classes = "small-icon";
    }

    return (
      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="col-10">
            <div className="row-active">
              <div className="word-base">{eng}</div>
              <div className="word-translation">{ru}</div>
            </div>
          </div>
          <div className={classes} onClick={this.toogleMarkedState}>
            <BookmarkIcon className="align-self-center"></BookmarkIcon>
          </div>
          <div className="small-icon" onClick={onDelete}>
            <TrashBinIcon></TrashBinIcon>
          </div>
        </div>
      </li>
    );
  }
}
