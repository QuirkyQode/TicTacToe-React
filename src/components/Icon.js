import React from "react";
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

const Icon = ({name}) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle className="icon"/>;
            break;
        case 'cross':
            return <FaTimes className="icon"/>;
            break;
        default:
            return <FaPen color="grey" className="icon"/>;
            break;
    }
}

export default Icon;