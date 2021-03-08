import { ActionType } from "../actionType";
import { Action } from "../actions";

// interface for typescript
interface HostelState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// initial state as usual
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: HostelState = initialState, action: Action): HostelState => {
  // the reducer needs to have data corresponding to the RepState
  switch (action.type) {
    case ActionType.FIND_HOSTEL:
      return { loading: true, error: null, data: [] };
    case ActionType.HOSTEL_SUCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

//uses actions
