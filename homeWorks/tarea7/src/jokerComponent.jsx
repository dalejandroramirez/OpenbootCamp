import { type } from '@testing-library/user-event/dist/type';
import React , {useState, useEffect}from 'react';
import { getRandomJoker } from './services/axiosService';
import ButtonMui from '@mui/material/Button';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import style from './card.module.css';
import App from './App';




const Jokercomponent = () => {

  const [contLiked, setContLiked] = useState(0);
  const [jokes, setJoker] = useState(null);
  const [infoJokes, setdata] = useState(null);

  useEffect(() => {
    obtainJoker();
  }, []);


  const obtainJoker = () => {
    getRandomJoker()
    .then((response)=>{
      setJoker(JSON.stringify(response.data.value))
      setdata(response)

    })
    .catch((error)=>{
      alert(`Something went wrong: ${error}` )
    })
  }     


  return (
    <div>
      <Card variant="outlined" className={style.cardContainer}>
        <p>
          {jokes}
        </p>
        <ButtonMui variant="contained" onClick={()=> setContLiked(contLiked+1)}>Like</ButtonMui>
        <ButtonMui className={style.buttonJoker} onClick={()=> obtainJoker()}>New Jokes</ButtonMui>
        <ButtonMui variant="contained">UnLike</ButtonMui>
        <div>
          <p>liked jokes</p>
            <span>{ contLiked}</span>
        </div>
      </Card>
    </div>
  );
}

export default Jokercomponent;
