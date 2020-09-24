import React from "react";
import ReactDOM from "react";

import Snackbar from "./Snackbar";

const Modal = () => {
    return (
        ReactDOM.createProtal(
            <Snackbar />,
            document.querySelector('#modal-root')
        )
    )
};

export default Modal;