import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal 
            isOpen={!!props.selectedOption} 
            onRequestClose = {props.handleClearSelectedOption}
            contentLabel="Selected Option" 
            className="modal"
            >
            <h3>Selected Option</h3>
            {props.selectedOption && <p className="option__text">{props.selectedOption}</p>}
            <button onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    );
};

export default OptionModal;

