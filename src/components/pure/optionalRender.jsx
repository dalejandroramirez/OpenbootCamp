import React, {useState} from 'react';


let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color : "white" ,

}


const unloggedStyle = {
  backgroundColor: "red",
  color : "white",
  fontWeeigth : "bold"
}


//  Login / Logout buttons

const LoginButton = ({loginAction, propStyle}) =>{
  return(
    <button style={propStyle} onClick={loginAction} > Login </button>
    )
  }

const LogoutButton = ({logoutAction, propStyle}) =>{
  return(
    <button style={propStyle} onClick={logoutAction}> Logout </button>
    )
  }





const Optionalrender = () => {

  const [access, setAccess] = useState(false);
  const [nMessages, setNMessage] = useState(0);

  // const updateAccess = () => {setAccess(!access)};

  const loginAction = () =>{
    setAccess(true)
  }

  const logoutAction = () =>{
    setAccess(false)
  }

  let optionalButton;

  // if (access) {
  //   optionalButton = <button onClick={updateAccess}> Logout </button>
  // }else{
  //   optionalButton = <button onClick={updateAccess}> Login </button>
  // }

  if (access) {
    optionalButton =  <LogoutButton 
                        propStyle ={unloggedStyle}
                        logoutAction = {logoutAction}>

                        </LogoutButton>
  }else{
    optionalButton =  <LoginButton 
                        propStyle={loggedStyle}
                        loginAction = {loginAction}

                        ></LoginButton>
  }


  // Unread Messages
  let addMessages = () => {
    setNMessage(nMessages + 1);
  }


  return (
    <div style={{backgroundColor:" green"}}>
    {/* optional Button */}
      {optionalButton}
      <div style={{background : "grey"}}>
      {/* N mesages unread  */}
      {/* {nMessages > 0 && <p> You have {nMessages} new messages... (logica 1)</p> }
      {nMessages === 0 && <p> there are no new messages</p> } */}
      </div>

      {/* Ternart Opertator */}
      
      {/* {nMessages > 0 && nMessages === 1 ?
         <p> You have one {nMessages} new messages...</p>:
         <p>  you have more messages</p>} */}
      {access ?
        <div style={{backgroundColor: "gray"}}>
         {nMessages>0 ? 
        <p> You have {nMessages} new message{nMessages > 1 ? "s":null } ...</p>:
        <p> There are no new mesages</p> }
      
      {<button onClick={addMessages}> {nMessages===0 ? 'add your first massage':'add new Message'}</button>}
      </div>
          :
      null}
        

    </div>
  );
}

export default Optionalrender;
