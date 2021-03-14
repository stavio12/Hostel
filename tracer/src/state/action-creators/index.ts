import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../actionType";
import { Action } from "../actions";

//this is where the actual action is taking place
//combines action type and actions in here

export const getHostel = () => {
  return async (dispatch: Dispatch<Action>) => {
    //dispatch set to Action so dispatch can detect what we actually specify for the payload
    dispatch({
      type: ActionType.FIND_HOSTEL,
    });

    try {
      const { data } = await axios.get("https://hosteltracerapi.herokuapp.com/");

      const hostel = data.data.map((result: any) => {
        return result;
      });
      console.log(data);
      dispatch({
        type: ActionType.HOSTEL_SUCESS,
        payload: hostel,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionType.ERROR,
        payload: error.message,
      });
    }
  };
};

export const findHostel = (uni: string, budget: string) => {
  //setting list to be params which we will set the search words to
  return async (dispatch: Dispatch<Action>) => {
    //dispatch set to Action so dispatch can detect what we actually specify for the payload
    dispatch({
      type: ActionType.FIND_HOSTEL,
    });
    console.log(uni, budget);
    try {
      const { data } = await axios.get(`https://hosteltracerapi.herokuapp.com/?price[lte]=${budget}&university=${uni}&sort=price`);
      console.log(data);

      const hostel = data.data.map((result: any) => {
        return result;
      });

      dispatch({
        type: ActionType.HOSTEL_SUCESS,
        payload: hostel,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionType.ERROR,
        payload: error.message,
      });
    }
  };
};
