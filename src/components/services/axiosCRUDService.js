import axios from "axios";

// login Method to reqRes endpoint
// @param {string} email
// @param {string} password

export const login = (email,password) => {
  let body = {
    email:email,
    password:password
  }

  // Returns the response with a promise
 return axios.post('https://reqres.in/api/login', body)

}


// TODO obtain all 
export const getAllUsers = () => {
  return axios.get('https://reqres.in/api/users')
}

// todos los usuarios con paginas
export const getAllPagedUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`)
}
// TODO obtain user by iD
export const getUsersByID = (id) => { 
  return axios.get(`https://reqres.in/api/users/${id}`)
}

// TODO Create User

export const postNewUser = (name,job) =>{

  let body = {
    name : name,
    job : job
  }

  return axios.post('https://reqres.in/api/users', body)

}
// TODO  UpdateUser

export const updateUserByID = (id,name,job) =>{

  let body = {
    name : name,
    job : job,
    id : id
  }

  return axios.put(`https://reqres.in/api/users/${id}`, body)
}

// TODO  delete
export const deleteUserById = (id) => { 
  return axios.delete(`https://reqres.in/api/users/${id}`)
}
