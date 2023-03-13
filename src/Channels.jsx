import {Text, View, TouchableOpacity, TextInput, FlatList} from "react-native";
import { useSelector, useDispatch} from "react-redux";
import { fetchChannelSuccess } from "./redux/channel/channelAction";
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "./channelData";

const titlesArray = [];
const descArray = [];

data.data.results.forEach((channel) => {
titlesArray.push(channel.meta.title);
// descArray.push(channel.meta.description);
descArray.push(channel.meta.description)
});


function Users() {

const state = useSelector(state => state);
const dispatch = useDispatch();
const [loading, setLoading] = useState(true);
const [id, setId] = useState(0);

 // function searchUser() {
 //
 //     dispatch(fetchUser());
 //   axios.get("https://jsonplaceholder.typicode.com/users")
 //   .then( response => {
 //     const users = response.data;
 //     dispatch(fetchUserSuccess(users))
 //   })
 //   .catch(err => {
 //     const error = err.message;
 //     dispatch(fetchUserFailure(error));
 //   })
 //
 // }

 setTimeout(() => {
   setLoading(false);
 }, 3000);

 useEffect(()=>{
   dispatch(fetchChannelSuccess(titlesArray, descArray));
 }, [])


function handlePress(key) {
  setId(key);
}


if(loading == true){
  return (<Text> Loading.... </Text>)

}else{


  return (
  <View>
  {
    state.titles.length == 0 ? (
      <Text> No Titles </Text>
    ) :



    state.titles.map((title, key) => (

  <View key={title}>

  <TouchableOpacity
    style={{
      margin: 10,
      backgroundColor: '#D9D9D9',
      padding: 10,
      borderRadius: 12,
    }}
  onPress={() => handlePress(key)}  >
    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
  </TouchableOpacity>

  </View>

    ))

  }


<View>
<Text style={{fontSize: 15, fontWeight: 'bold', margin: 10}}> {state.desc[id]} </Text>
</View>

  </View>
  )

}





}

export default Users;
