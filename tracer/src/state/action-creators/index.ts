import { useEffect } from "react";
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
      const { data } = await axios.get("http://localhost:4000/api/hostel/");

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

export const findHostel = (hostel: string) => {
  //setting list to be params which we will set the search words to
  return async (dispatch: Dispatch<Action>) => {
    //dispatch set to Action so dispatch can detect what we actually specify for the payload
    dispatch({
      type: ActionType.FIND_HOSTEL,
    });

    try {
      const { data } = await axios.get("https://registry.npmjs.org/-/v1/search?", {
        params: {
          text: hostel,
        },
      });
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.HOSTEL_SUCESS,
        payload: names,
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
