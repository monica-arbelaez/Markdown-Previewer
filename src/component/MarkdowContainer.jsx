import React, { Component } from "react";
import TeaxtMarkdown from "./TextMarkdown";
import FinalText from "./FinalText";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/StyleMarkdow.css";
export default class MarkdowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput:  'Heading\n=======\n\
      \nSub-heading\n-----------\n \
      \n### Another deeper heading\n \
      \nParagraphs are separated\nby a blank line.\n\*'
    };
  }

  handleInputChange(event) {
    this.setState({
      textInput: event.target.value,
    });
  }

  render() {
    return (
      <div id="div-img">
        <div  id="container" className="container">
          <div className="row">
            <div className="col-md-12 form-group text-responsive ">
              <div className=" text-white">
                <h1>INGRESE EL TEXTO</h1>
              </div>
              <div>
                <TeaxtMarkdown
                  change={this.handleInputChange.bind(this)}
                  defaultContent={this.state.textInput} />
                <FinalText textInput={this.state.textInput} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
