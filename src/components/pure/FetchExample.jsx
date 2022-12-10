import React, {useEffect,useState}  from 'react';
import { getAllUsers,getAllPagedUsers, getUserDetails, login } from '../services/fetchService';

const Fetchexample = () => {
  const [users, setUsers] = useState([]);
  const [selecteduser, setSelecteduser] = useState(null);
  const [totalUsers, settotalUsers] = useState(12);
  const [pages, setPages] = useState(2);
  const [usersPerPage, setUsersPerPage] = useState(6);


  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
     .then((response)=>{
       console.log('All users',response.data);
       setUsers(response.data);
       settotalUsers(response.total);
       setUsersPerPage(response.per_page);
       setPages(response.total_pages);
     })
     .catch((error)=>{
       alert(`Error while retreving the users: ${error}`)
     })
     .finally(() => {
       console.log('ended obtaining users');
       console.table(users);
     })
  }

const  obtainPagedUser = (page) => {
  getAllPagedUsers(page)
    .then((response)=>{
      console.log('All Paged users',response.data);
      setUsers(response.data);
      settotalUsers(response.total);
      setUsersPerPage(response.per_page);
      setPages(response.total_pages);
    })
    .catch((error)=>{
      alert(`Error while retreving the users: ${error}`)
    })
    .finally(() => {
      console.log('ended obtaining users');
      console.table(users);
    })
}

const obtainUserDetails = (id) => {
  getUserDetails(id) 
    .then((response)=>{
      setSelecteduser(response.data);
      console.log('All Paged users',response.data);
      settotalUsers(response.total);
      setUsersPerPage(response.per_page);
      setPages(response.total_pages);
    })
    .catch((error)=>{
      alert(`Error while retreving the users: ${error}`)
    })
    .finally(() => {
      console.log('ended obtaining user');
      console.table(selecteduser);
    })
} 

const authUser = () => {
  login('eve.holt@reqres.in','cityslicka') 
    .then((response)=>{
      setSelecteduser(response.data);
      console.log('Token:',response.token);
      sessionStorage.setItem('token',response.token)

    })
    .catch((error)=>{
      alert(`Error while login the user: ${error}`)
    })
    .finally(() => {
      console.log('ended login user. Navigate to home');

  })
}


  return (
    <div>
      {/* Button to simulate login */}
      <button onClick={authUser}> Auth User</button>
      <h2> Users:</h2>
    {users.map((user,index) =>
      (
        <p key={index} onClick={()=> obtainUserDetails(user.id)}>

        {user.first_name} {user.last_name}
      </p>
      )   
    )}
    <p> Showing {usersPerPage} users of {totalUsers}</p>
    <button onClick={()=>{obtainPagedUser(1)}}>
      1
    </button>
    <button onClick={()=>{obtainPagedUser(2)}}>
      2
    </button>
    <div>
      {selecteduser != null ?  
      (
      <div>
        <h3>
          User Details
        </h3>
          <p> Name :{selecteduser.first_name} </p>
          <p> Last Name: {selecteduser.last_name}</p>
          <p> Email: {selecteduser.email}</p>
          <img src={selecteduser.avatar} style={{height:'50px' ,width:'50px'}} alt='Avatar'/> 
      </div>
      ):
      (<p>Plear click on a User to see its details</p>)
      }
    </div>
  </div>
  );
}

export default Fetchexample;
