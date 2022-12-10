import APIRequest from "../../utils/config/axios.config";
import axios from 'axios';





export function getRandomUser(){
  return APIRequest.get('/', {
    validateStatus : function (status) {
      return status < 500;
    }
  });  //     baseURL : 'https://randomuser.me/api/'
}



