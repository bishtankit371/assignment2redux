import store from "./src/redux/channel/store.js"
import Channels from "./src/Channels"
import { Provider } from "react-redux"
import React, {useState} from 'react'
import Test from "./src/Test"


const App = () => {


  return (
<>
<Provider store={store}>
<Channels />
</Provider>
</>

)


};




export default App;
