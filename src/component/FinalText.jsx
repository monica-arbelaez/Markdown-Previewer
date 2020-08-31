import React, { Component } from 'react'
import marked from 'marked';
export default class FinalText extends Component {
    render() {
        return (
            <section className='card border-info mb-3 preview'>
            <label for='editor' className='p-3 mb-2 bg-info text-white font-weight-bold card-header'>Vista previa</label>
            <div className='card-body text-info' dangerouslySetInnerHTML={{__html: marked(this.props.textInput)}}></div>
            </section>
        )
    }
}
