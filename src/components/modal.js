import React, { Component } from 'react';
import './modal.css';

class Modal extends Component{
    constructor(props){
        super(props)
        this.state = {
            closeModal: this.props.closeModal,
            modal: this.props.modal
        }
        console.log(this.props.modal)
    }
    
    componentDidUpdate(){
        console.log("update!")
    }
    
    render(){
        let showModal= this.props.modal === true ? "show-modal" : "hide-modal";
        return(
            <div className={"modal " + showModal}>
                <p>This is a ReactJS app built by <a href="www.github.com/clw8">Christopher Linshen Walsh</a>.
                To view the source code, please go <a href="https://github.com/clw8/react-crypto-learning">HERE</a></p>
                <button onClick={this.state.closeModal}>Close</button>
            </div>
        )
    }
}

export default Modal;