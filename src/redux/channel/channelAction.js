import { fetch_channel_success } from "./channelTypes";
import axios from "axios";


export function fetchChannelSuccess(titles, desc) {
  return {
    type: fetch_channel_success,
    payload: titles,
    desc: desc
  }
}



// export function searchUser() {
//
// console.log("searchUser");
//
// return ((dispatch) => {
//   dispatch(fetchUser);
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then( response => {
//   const users = response.data;
//   console.log(users);
//   // dispatch(fetchUserSuccess(users))
// })
// .catch(err => {
//   const error = err.message;
//   console.log(error);
// })
// })
//
// }
