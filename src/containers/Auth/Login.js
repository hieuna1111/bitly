import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import LinkItem from "./LinkItem";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longUrl: "",
      shortUrl: "",
      errMessage: "",
      contentButton: false,
    };
  }

  handleOnChangeInput = (event) => {
    this.setState({
      longUrl: event.target.value,
    });
  };

  hanldeShort = (linkUrl) => {
    this.setState({
      contentButton: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="grid-container">
            <div className="content">
              <div class="col-9 inputURL">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Shorten your link"
                  value={this.state.longUrl}
                  onChange={(event) => {
                    this.handleOnChangeInput(event);
                  }}
                />
              </div>
              <div className="btn-shorten">
                <button
                  type="submit"
                  onClick={(linkUrl) => this.hanldeShort(linkUrl)}
                  class="btn btn-primary"
                  disabled={!this.state.longUrl}
                >
                  {this.state.contentButton === false ? "Shorten" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="shorten-actions">
          <div class="left">
            <span>
            https://quillbot.com/grammar-check
            </span>
          </div>

          <div class="right">
            <div class="short-url">
              <span>https://bit.ly/3IEPN6i </span>
            </div>

            <div class="copy">
              <button>Copy</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
