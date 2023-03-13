import { fetch_channel_success} from "./channelTypes";

const initialState = {
  titles: [],
  desc: []
}

const channelReducer = (state = initialState,action)=>{

switch (action.type) {


  case fetch_channel_success: return{
  titles: action.payload,
  desc: action.desc
  }


default: return state
}

}

export default channelReducer;
