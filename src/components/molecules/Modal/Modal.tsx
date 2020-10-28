import React, { ReactNode } from 'react';
import './Modal.scss';
import close from "./images/close.png";

type Props = {
    children?: ReactNode;
    show: boolean;
    title?: string;

    onClose?: () => void;
}

function Modal(props: Props) {
    return (
        props.show ? 
            <div className="modal-container-style">
                <div className="modal-content-style">
                    {props.onClose ? <img className="close-style" alt="close" src={close} onClick={props.onClose}/> : null}
                    <div className="title-style">
                        {props.title}
                    </div>
                    <div className="modal-body-style">
                        {props.children}
                    </div>
                </div>
            </div> : null
    );
}

export default Modal;