import React from 'react';

const AsyncExample = () => {
  

  async function generateNumber() {
    return(1);
  }

  async function generatePromiseNumber() {
    return Promise.resolve(2)
  }

  function obtainNumber() {
    generateNumber()
    .then((response)=> alert(`Response: ${response}`))
    .catch((error)=>alert(`algo salió mal ${error}`))
  }

  function obtainPromiseNumber() {
    generatePromiseNumber()
      .then((response)=> alert(`Response: ${response}`))
      .catch((error)=>alert(`algo salió mal ${error}`))
  }


  async function saveSessionStorage(key,value) {
    sessionStorage.setItem(key,value);
    return Promise.resolve(sessionStorage.getItem(key))
  }
  
  function showStorage() {
    saveSessionStorage('name','Martin')
      .then((response)=>{
        let value = response;
        alert(`Saved Name: ${value}`)
      })
      .catch((error)=>alert(`algo salió mal ${error}`))
      .finally(()=>{console.log('SUCCESS: Name saved and retreived');}) 
  }


  async function obtainMessage() {
    let promise = new Promise((resolve,reject) => {
      setTimeout(() => resolve('Hello World'),2000)
    });

    let message = await promise;

    await alert(`Message received: ${message}`)
  }
  

const returnError = async() =>{
  await Promise.reject(new Error('ooops!'))
}

const consumeError = () => {
  returnError()
    .then((r) => alert(`Everything is ok: ${r}`))
    .catch(err=> alert(`Something went wrong: ${err}`))
    .finally(()=> alert('Finnaly exacuted'))
}

const urlNotFound = async() => {
  try {
    let response = await fetch('htpps://invalidURL.com');
    alert(`Response ${JSON.stringify(response)}`)
  } catch (error) {
    alert(`Something went wrong with your URL : ${error}`)
  }

}



const multiplePromise = async () => {
  let results = await Promise.all(
    [
      fetch('https://regres.in/api/users'),
      fetch('https://regres.in/api/users?page=2')
    ]
  ).catch((error)=>{alert(`Something went wrong with your URLs : ${error}`)})

}



  
  return (
    <div>
    <h1>Async Promise Example</h1>
      <button onClick={obtainNumber}>obtener Numero</button>
      <button onClick={obtainPromiseNumber}>obtener Promesa Numero</button>
      <button onClick={showStorage}>Save Name and show</button>
      <button onClick={obtainMessage}>Receive Message in 2 seconds</button>
      <button onClick={consumeError}>Obtain Error</button>
      <button onClick={urlNotFound}>Request to Unknown URL</button>
      <button onClick={multiplePromise}>MultiplePromise</button>
    </div>
  );
}

export default AsyncExample;
