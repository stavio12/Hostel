import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state"; // import the type of reducer data name RootState

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// links to Repo list and state RootState coming from reducer since thats where the data would come from
