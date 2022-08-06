import css from './Modal.module.css'
import React, {Component} from 'react'
export class Modal extends Component {
   

    handlerClickEscape = event => {
        if (event.code === 'Escape') {
            this.props.onClose()
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handlerClickEscape)
    }
    onCloseBackdrop = (event) => {
        if (event.currentTarget === event.target) {
            this.props.onClose()
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlerClickEscape)
    }
    
    render() {
    return(
        <div onClick={this.onCloseBackdrop} className={css.overlay}>
            <div className={css.modal}>
                <img src={`https://image.tmdb.org/t/p/w400/${this.props.image}`} alt="" />

                <button type='button'
                onClick={this.props.onClose}
                >Close</button>
            </div>
        </div>
    )}
}