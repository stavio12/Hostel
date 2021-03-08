import { combineReducers } from "redux";
import HostelReducer from "./HostelReducer";

const hostelReducers = combineReducers({
  hostel: HostelReducer,
});

export default hostelReducers;
// in here all the reducers are being combined into hostel

// this root state will take the reducer function and rerturn the type of whatever is there
export type RootState = ReturnType<typeof hostelReducers>;

//liks to hostel reducer file
