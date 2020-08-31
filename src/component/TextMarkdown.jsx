import React, { Component } from 'react'

export default class TextMarkdown extends Component {
    render() {
        return (
            <div>
           <textarea  id ="editor" className="form-control writing" 
           defaultValue={this.props.defaultContent}
           onChange={this.props.change}  rows="15"/>
            </div>
        )
    }
}
