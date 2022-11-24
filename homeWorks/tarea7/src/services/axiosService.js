import APIRequest from "../utils/config/axios.config";

export function getRandomJoker() {
  return APIRequest.get('jokes/random')
}

