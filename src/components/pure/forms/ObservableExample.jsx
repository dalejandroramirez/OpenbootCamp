import React , {useState} from 'react';
import { getNumber } from '../../services/observableService';

const Observableexample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumber = async () => {
      console.log('Suscrition to Observable')
      getNumber.subscribe(
        {
          next(newNumber){
          console.log('New Number:', newNumber);
          setNumber(newNumber);
          },
          error(error){alert(`Something went wrong ${error}`)
          console.log('Error to Observable')
          },
          complete(){alert(`Finished with ${number}`)

          console.log('Done with the observable')

        }
        }
      )
    }

  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={obtainNewNumber}>
        Obtain new Numbers
      </button>
    </div>
  );
}

export default Observableexample;
