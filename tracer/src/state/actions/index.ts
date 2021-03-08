import { ActionType } from "../actionType";

interface FIND_HOSTEL {
  type: ActionType.FIND_HOSTEL;
}

interface HOSTEL_SUCESS {
  type: ActionType.HOSTEL_SUCESS;
  payload: string[];
}

interface ERROR {
  type: ActionType.ERROR;
  payload: string;
}

export type Action = FIND_HOSTEL | HOSTEL_SUCESS | ERROR;

// related to action creators
