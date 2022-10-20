import React, {useRef, useState} from 'react';
import Child from '../pure/forms/child';
import s from "../../styles/father.module.css"


const Father = () => {

    const [name, setname] = useState("Alejo");

    function showMessage(text) {
        alert(`Message received: ${text}`);
    }

    function updateName(newName) {
        setname(newName)
        
    }
    return (
        <div className={`${s.father}`}>
            <Child name={name} send={showMessage} update = {updateName}></Child>
        </div>
    );
}

export default Father;
