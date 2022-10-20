import React, { useRef } from 'react';
import s from "../../../styles/father.module.css"

const Child = (props) => {


    const messageRef = useRef(``)
    const nameRef = useRef(``)
    
    function clickButton() {
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`)
    }
    
    function submitName(e) {
        e.preventDefault();
        props.update(nameRef.current.value)
    }


    function clickButtonParams(text) {
        alert(`Text: ${text}`);
    }
    return (
        <div style={{background:"gray",padding:"30px"}} className={`${s.child}`}>
            <p onMouseOver={()=>{console.log("on mouse over :)")}}> Hello, {props.name}</p>
            <button onClick={()=>{ console.log("Boton 1 pulsado")}}>
                boton 1
            </button>
            <button onClick={clickButton}>
                boton 2
            </button>
            <button onClick={()=>{clickButtonParams(`Hola ${props.name}`)}}>
                boton 3
            </button>
            <input 
                placeholder = "Send a text to your father"
                onFocus = {()=>console.log("Input Focused :)")}
                onChange = {(e)=>{console.log(`Input changed`,e.target.value )}}
                onCopy={()=>console.log("Copiado text del input")}
                ref={messageRef}
                />
            <button onClick={()=>{props.send(messageRef.current.value)}}>
                Send Messange
            </button>

            <div style={{marginTop:"20px"}}>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='New Name '/>
                
                <button type='submit'>
                    Update Name
                </button>
            </form>

            </div>    
        </div>
    );
}

export default Child;
