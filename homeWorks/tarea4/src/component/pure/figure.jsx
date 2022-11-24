import React ,{useState} from 'react';


const Figure = ({widthFig, heigthFig}) => {
  

  const [colorFig, setColorFig] = useState(`rgb(0,0,0)`);
  const [manageInterval, setManageInterval] = useState(0);

  function getRandomArbitrary() {
    return (setColorFig(`rgb(${Math.random()*(255)},${Math.random()*(255)}, ${Math.random()*(255)})`));
  }

  function overMouseColor(){
    return setManageInterval(setInterval(getRandomArbitrary,500));

  }

  function onStopChangeColor() {
    return clearInterval(manageInterval);
  }



  return (
<div>

    <div style={{width:widthFig, height: heigthFig, background:colorFig}} className='figureStyle'
        onMouseOver={overMouseColor}
        onMouseLeave={onStopChangeColor}
        onDoubleClick={ ()=>{clearInterval(manageInterval)}}
    >
    </div>
    <p style={{ color: 'black' }}>Color: {colorFig} </p>
    
</div>

  );
}

export default Figure;
