import { combineReducers } from "redux";
import authReducer from "./authReducer";
import annoncereducer from "./servicereducer";

 const rootReducer = combineReducers({
 auth: authReducer,
 annonces: annoncereducer,
});
export default rootReducer;