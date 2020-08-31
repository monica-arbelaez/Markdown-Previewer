import React, { Component } from 'react'

export default class TextMarkdown extends Component {
    render() {
        return (
            <div>
           <textarea className="form-control writing" 
           defaultValue={this.props.defaultContent}
           onChange={this.props.change}  rows="30"/>
            </div>
        )
    }
}
