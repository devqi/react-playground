import React from 'react';
import Modal from 'react-modal';

const OptionModal = () => {
    return (
        <Modal 
            isOpen={true} 
            contentLabel="Selected Option" >
            <h3>selected option</h3>
        </Modal>
    );
};

export default OptionModal;