import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};
// instead of doing a whole lot of codes in the Repolist file we do this here to make that file..
//toggle between the two and read the comments to understand

// related to action creators from state
