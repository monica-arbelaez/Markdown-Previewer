import React, { Component } from 'react'
import marked from 'marked';
export default class FinalText extends Component {
    render() {
        return (
            <section  id="preview" className='card border-dark mb-3 preview'>
            <label for='editor'  className='p-3 mb-2 bg-dark text-white font-weight-bold card-header'>TEXTO EDITADO</label>
            <div className='card-body text-warning' dangerouslySetInnerHTML={{__html: marked(this.props.textInput)}}></div>
            </section>
        )
    }
}
