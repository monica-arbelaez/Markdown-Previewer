import React, { Component } from 'react'
import TeaxtMarkdown from './TextMarkdown';
import FinalText from './FinalText';
import "bootstrap/dist/css/bootstrap.min.css";
export default class MarkdowContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: ''
        };
      }
    
      handleInputChange(event){
          this.setState({
              textInput: event.target.value
          });
      }
   
    render() {
        return (
            <div className="container">
              <div className="row">
               <div className="col-md-8 form-group">
                <h2>INGRESE EL TEXTO</h2>
                <div>
                 <TeaxtMarkdown change={this.handleInputChange.bind(this)} defaultContent={this.state.textInput}/>
                 <FinalText  textInput={this.state.textInput}/>

                </div>
              </div>
             </div>
            </div>
        )
    }
}
