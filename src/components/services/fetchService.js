export const  getAllUsers = async () =>{

  
  let response = await fetch('https://reqres.in/api/users');
    console.log('Response',response);
    console.log('Status',response.status);
    // We return the json
    return response.json()
  
  }

export const  getAllPagedUsers = async (page) =>{

  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  console.log('Response Page',response);
  console.log('Status Page',response.status);

    // We return the json
    return response.json()
  
  }


export const getUserDetails = async (id) => {
  
  let response = await fetch(`https://reqres.in/api/users/${id}`)
 
  return response.json()
}


export const login = async (email,password) => {

  let body = {
    email,
    password
  }

  let response = await fetch("https://reqres.in/api/login",{
    method: 'POST',
    credentials:"omit",
    mode: "no-cors",
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json'
    },
    body:body,
  });
  console.log('Response Post',response);
  console.log('Status Post',response.status);
  return response.json()
}